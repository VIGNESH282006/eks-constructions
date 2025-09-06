import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ConstructionPackage.css';

const ConstructionPackage = () => {
  const [calculator, setCalculator] = useState({
    floors: 'ground',
    package: 'basic',
    builtUpArea: '',
    waterSumpCapacity: '',
    septicTankSize: '',
    wallLength: '',
    wallHeight: ''
  });

  const [expandedPackages, setExpandedPackages] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const packages = {
    basic: { rate: 1999, name: 'Basic Package @ ₹1999/sqft' },
    standard: { rate: 2199, name: 'Standard Package @ ₹2199/sqft' },
    premium: { rate: 2499, name: 'Premium Package @ ₹2499/sqft' }
  };

  const packageDetails = [
    {
      id: 'basic',
      name: 'BASIC PACKAGE',
      price: '₹ 1999',
      unit: 'per sqft',
      color: '#1e40af',
      features: {
        'Design': ['Basic architectural drawings', '2D floor plans', 'Elevation design', 'Structural drawings'],
        'Project Management': ['Project timeline', 'Material procurement', 'Labor coordination', 'Quality checks'],
        'Structure': ['RCC foundation', 'Brick masonry walls', 'RCC roof slab', 'Basic beam & column'],
        'Bathroom & Plumbing': ['Basic ceramic tiles', 'Standard fixtures', 'CPVC plumbing', 'Water connections'],
        'Flooring': ['Ceramic tiles', 'Basic granite', 'Cement flooring', 'Staircase tiling'],
        'Kitchen & Dining': ['Basic granite platform', 'Ceramic tile dadoing', 'Standard sink', 'Basic electrical points'],
        'Door, Windows and Railing': ['Teak wood frames', 'Flush doors', 'UPVC windows', 'Basic railings'],
        'Painting': ['Basic primer', 'Emulsion paint', 'Exterior painting', '2 coats finish'],
        'Electrical': ['Basic wiring', 'Standard switches', 'LED lights', 'Distribution board'],
        'What\'s Not Included': ['Furniture', 'AC installation', 'Landscaping', 'Premium fittings']
      }
    },
    {
      id: 'standard',
      name: 'STANDARD PACKAGE',
      price: '₹ 2199',
      unit: 'per sqft',
      color: '#3b82f6',
      features: {
        'Design': ['Detailed architectural drawings', '2D & basic 3D plans', 'Enhanced elevation', 'Structural & MEP drawings'],
        'Project Management': ['Detailed timeline', 'Quality material sourcing', 'Skilled labor management', 'Regular inspections'],
        'Structure': ['Enhanced RCC work', 'AAC block masonry', 'Waterproofing', 'Improved structural design'],
        'Bathroom & Plumbing': ['Premium ceramic tiles', 'Better fixtures', 'Hot & cold water', 'Exhaust fans'],
        'Flooring': ['Vitrified tiles', 'Granite flooring', 'Wooden flooring options', 'Designer staircase'],
        'Kitchen & Dining': ['Granite platform with sink', 'Premium tile dadoing', 'Modular kitchen prep', 'Enhanced electrical'],
        'Door, Windows and Railing': ['Seasoned teak wood', 'Panel doors', 'Better UPVC windows', 'Designer railings'],
        'Painting': ['Premium primer', 'Branded emulsion', 'Texture options', 'Weather coat exterior'],
        'Electrical': ['Enhanced wiring', 'Modular switches', 'Designer lights', 'TV & internet points'],
        'What\'s Not Included': ['High-end furniture', 'Premium AC', 'Swimming pool', 'Smart home features']
      }
    },
    {
      id: 'premium',
      name: 'PREMIUM PACKAGE',
      price: '₹ 2499',
      unit: 'per sqft',
      color: '#dc2626',
      features: {
        'Design': ['Premium architectural design', 'Detailed 3D modeling', 'Luxury elevations', 'Complete MEP design'],
        'Project Management': ['Dedicated project manager', 'Premium material sourcing', 'Expert craftsmen', 'Weekly reports'],
        'Structure': ['High-grade RCC', 'AAC blocks with insulation', 'Advanced waterproofing', 'Seismic design'],
        'Bathroom & Plumbing': ['Designer tiles', 'Branded sanitary ware', 'Instant water heaters', 'Premium fittings'],
        'Flooring': ['Imported tiles', 'Premium granite/marble', 'Hardwood flooring', 'Luxury staircase design'],
        'Kitchen & Dining': ['Modular kitchen', 'Quartz countertops', 'Premium appliances prep', 'Under-cabinet lighting'],
        'Door, Windows and Railing': ['Engineered wood doors', 'Premium UPVC/Aluminum', 'Security features', 'Artistic railings'],
        'Painting': ['Luxury paints', 'Texture & special effects', 'Premium exterior finish', 'Decorative elements'],
        'Electrical': ['Premium wiring', 'Smart switches', 'Chandelier points', 'Home automation prep'],
        'What\'s Not Included': ['Luxury furniture', 'Premium appliances', 'Landscaping design', 'Swimming pool']
      }
    }
  ];

  const rates = {
    waterSump: 24,
    septicTank: 24,
    compoundWall: 425
  };

  useEffect(() => {
    calculateTotalCost();
  }, [calculator]);

  const calculateTotalCost = () => {
    let total = 0;
    const packageRate = packages[calculator.package].rate;

    // Built up area cost
    if (calculator.builtUpArea) {
      total += parseFloat(calculator.builtUpArea) * packageRate;
    }

    // Water sump cost
    if (calculator.waterSumpCapacity) {
      total += parseFloat(calculator.waterSumpCapacity) * rates.waterSump;
    }

    // Septic tank cost
    if (calculator.septicTankSize) {
      total += parseFloat(calculator.septicTankSize) * rates.septicTank;
    }

    // Compound wall cost
    if (calculator.wallLength && calculator.wallHeight) {
      const wallArea = parseFloat(calculator.wallLength) * parseFloat(calculator.wallHeight);
      total += wallArea * rates.compoundWall;
    }

    setTotalCost(total);
  };

  const handleInputChange = (field, value) => {
    setCalculator(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const togglePackageSection = (packageId, section) => {
    const key = `${packageId}_${section}`;
    setExpandedPackages(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCalculationResults = () => {
    const packageRate = packages[calculator.package].rate;
    const builtUpCost = calculator.builtUpArea ? parseFloat(calculator.builtUpArea) * packageRate : 0;
    const waterSumpCost = calculator.waterSumpCapacity ? parseFloat(calculator.waterSumpCapacity) * rates.waterSump : 0;
    const septicTankCost = calculator.septicTankSize ? parseFloat(calculator.septicTankSize) * rates.septicTank : 0;
    const wallArea = (calculator.wallLength && calculator.wallHeight) 
      ? parseFloat(calculator.wallLength) * parseFloat(calculator.wallHeight) 
      : 0;
    const wallCost = wallArea * rates.compoundWall;

    return {
      builtUpCost,
      waterSumpCost,
      septicTankCost,
      wallArea,
      wallCost
    };
  };

  const results = getCalculationResults();

  return (
    <div className="construction-package-page">
      {/* Cost Calculator Section */}
      <section className="cost-calculator">
        <div className="container">
          <h1>Home Construction Cost Calculator (2025) Chennai</h1>
          <p className="calculator-subtitle">You can arrive your Construction estimate here</p>

          <div className="calculator-controls">
            <div className="control-group">
              <label>No. of Floors</label>
              <select 
                value={calculator.floors}
                onChange={(e) => handleInputChange('floors', e.target.value)}
              >
                <option value="ground">Ground</option>
                <option value="ground_first">Ground + First</option>
                <option value="ground_first_second">Ground + First + Second</option>
              </select>
            </div>

            <div className="control-group">
              <label>Package</label>
              <select 
                value={calculator.package}
                onChange={(e) => handleInputChange('package', e.target.value)}
              >
                <option value="basic">{packages.basic.name}</option>
                <option value="standard">{packages.standard.name}</option>
                <option value="premium">{packages.premium.name}</option>
              </select>
            </div>
          </div>

          <div className="calculation-table">
            <div className="table-header">
              <div className="col-work">Work</div>
              <div className="col-area">Area</div>
              <div className="col-unit">Unit</div>
              <div className="col-rate">Rate</div>
              <div className="col-cost">Cost</div>
            </div>

            <div className="table-row">
              <div className="col-work">Enter required Built up Area for Ground Floor</div>
              <div className="col-area">
                <input 
                  type="number" 
                  placeholder="Area in sqft"
                  value={calculator.builtUpArea}
                  onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
                />
              </div>
              <div className="col-unit">sqft</div>
              <div className="col-rate">Rs.{packages[calculator.package].rate}</div>
              <div className="col-cost">Rs. {results.builtUpCost.toLocaleString()}</div>
            </div>

            <div className="table-row">
              <div className="col-work">Size of RCC Water Sump (A 4 member family will require 9000 liter capacity)</div>
              <div className="col-area">
                <input 
                  type="number" 
                  placeholder="No. of Liters"
                  value={calculator.waterSumpCapacity}
                  onChange={(e) => handleInputChange('waterSumpCapacity', e.target.value)}
                />
              </div>
              <div className="col-unit">ltr</div>
              <div className="col-rate">Rs.{rates.waterSump}</div>
              <div className="col-cost">Rs. {results.waterSumpCost.toLocaleString()}</div>
            </div>

            <div className="table-row">
              <div className="col-work">Size of Septic Tank</div>
              <div className="col-area">
                <input 
                  type="number" 
                  placeholder="No. of Liters"
                  value={calculator.septicTankSize}
                  onChange={(e) => handleInputChange('septicTankSize', e.target.value)}
                />
              </div>
              <div className="col-unit">ltr</div>
              <div className="col-rate">Rs.{rates.septicTank}</div>
              <div className="col-cost">Rs. {results.septicTankCost.toLocaleString()}</div>
            </div>

            <div className="table-row">
              <div className="col-work">Plain Compound Wall</div>
              <div className="col-area">
                <input 
                  type="number" 
                  placeholder="Length"
                  value={calculator.wallLength}
                  onChange={(e) => handleInputChange('wallLength', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Height"
                  value={calculator.wallHeight}
                  onChange={(e) => handleInputChange('wallHeight', e.target.value)}
                />
              </div>
              <div className="col-unit">sqft</div>
              <div className="col-rate">Rs.{rates.compoundWall}</div>
              <div className="col-cost">Rs. {results.wallCost.toLocaleString()}</div>
            </div>

            <div className="table-total">
              <div className="total-label">Total Construction Cost</div>
              <div className="total-amount">Rs. {totalCost.toLocaleString()}</div>
            </div>
          </div>

          <div className="calculator-cta">
            <Link to="/contact" className="estimate-button">
              GET FREE ESTIMATE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2>Our Home Construction Packages</h2>
          
          <div className="packages-grid">
            {packageDetails.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-header" style={{ backgroundColor: pkg.color }}>
                  <h3>{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="unit">{pkg.unit}</span>
                  </div>
                </div>

                <div className="package-features">
                  {Object.entries(pkg.features).map(([category, items]) => (
                    <div key={category} className="feature-category">
                      <button
                        className="category-header"
                        onClick={() => togglePackageSection(pkg.id, category)}
                      >
                        <span>{category}</span>
                        <span className="toggle-icon">
                          {expandedPackages[`${pkg.id}_${category}`] ? '−' : '+'}
                        </span>
                      </button>
                      
                      {expandedPackages[`${pkg.id}_${category}`] && (
                        <div className="category-items">
                          {items.map((item, index) => (
                            <div key={index} className="feature-item">
                              <span className="check-icon">✓</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="package-footer">
                  <Link to="/contact" className="specification-button">
                    GET DETAILED SPECIFICATION
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="package-cta">
        <div className="container">
          <h2>Ready to Build Your Dream Home?</h2>
          <p>Choose the perfect package for your needs and get started today!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">
              Get Free Consultation
            </Link>
            <a href="tel:+919876543210" className="cta-btn secondary">
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPackage;

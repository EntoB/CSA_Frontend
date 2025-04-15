import { useState } from 'react';
import { FaKey, FaCopy, FaCheck, FaCogs, FaPlus, FaTrash } from 'react-icons/fa';
import { FiUser, FiUsers, FiSettings } from 'react-icons/fi';
import '../Super.css';

const SystemManager = () => {
  // Key generation states
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [keyType, setKeyType] = useState('admin');
  
  // Service management states
  const [services, setServices] = useState([
    { id: 1, name: 'Marketplace Access', description: 'Connect farmers to buyers', category: 'Commerce' },
    { id: 2, name: 'Training Portal', description: 'Educational resources', category: 'Education' }
  ]);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    category: ''
  });
  const [activeTab, setActiveTab] = useState('keys');

  // Generate secure random key
  const generateKey = () => {
    const array = new Uint32Array(10);
    window.crypto.getRandomValues(array);
    const key = `key-${array.join('').substr(0, 16)}`;
    setGeneratedKey(key);
    setCopied(false);
  };

  // Copy key to clipboard
  const copyToClipboard = () => {
    if (!generatedKey) return;
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Add new service
  const addService = (e) => {
    e.preventDefault();
    if (newService.name) {
      const service = { 
        ...newService, 
        id: Date.now() 
      };
      setServices([...services, service]);
      setNewService({ name: '', description: '', category: '' });
    }
  };

  // Delete service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="system-manager">
      <header className="system-header">
        <div className="header-content">
          <FiSettings className="header-icon" />
          <div>
            <h1>System Management</h1>
            <p className="subtitle">Manage access keys and platform services</p>
          </div>
        </div>
      </header>

      <div className="manager-container">
        <div className="sidebar">
          <button 
            className={`sidebar-btn ${activeTab === 'keys' ? 'active' : ''}`}
            onClick={() => setActiveTab('keys')}
          >
            <FaKey className="btn-icon" />
            Key Generation
          </button>
          <button 
            className={`sidebar-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <FaCogs className="btn-icon" />
            Services
          </button>
        </div>

        <div className="content-area">
          {/* Key Generation Tab */}
          {activeTab === 'keys' && (
            <div className="key-generation">
              <h2 className="section-title">
                {keyType === 'admin' ? <FiUser /> : <FiUsers />}
                Generate {keyType === 'admin' ? 'Admin' : 'Customer'} Key
              </h2>
              
              <div className="key-type-toggle">
                <button
                  className={`toggle-btn ${keyType === 'admin' ? 'active' : ''}`}
                  onClick={() => setKeyType('admin')}
                >
                  Admin
                </button>
                <button
                  className={`toggle-btn ${keyType === 'customer' ? 'active' : ''}`}
                  onClick={() => setKeyType('customer')}
                >
                  Customer
                </button>
              </div>

              <button 
                className="generate-btn"
                onClick={generateKey}
              >
                Generate Key
              </button>

              {generatedKey && (
                <div className="key-display-card">
                  <div className="key-header">
                    <span className="key-label">Generated Key:</span>
                    <button 
                      className={`copy-btn ${copied ? 'copied' : ''}`}
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <>
                          <FaCheck /> Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="key-value">
                    {generatedKey}
                  </div>
                  <div className="key-instructions">
                    <p>Distribute this key securely to authorized personnel.</p>
                    <p>Keys provide access to {keyType === 'admin' ? 'administrative functions' : 'customer accounts'}.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="services-management">
              <h2 className="section-title">
                <FaCogs />
                Platform Services
              </h2>
              
              <form className="service-form" onSubmit={addService}>
                <h3 className="form-title">Add New Service</h3>
                <div className="form-group">
                  <label>Service Name*</label>
                  <input 
                    type="text" 
                    value={newService.name}
                    onChange={(e) => setNewService({...newService, name: e.target.value})}
                    placeholder="e.g., Weather Forecast"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                    placeholder="Brief description of the service"
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input 
                    type="text" 
                    value={newService.category}
                    onChange={(e) => setNewService({...newService, category: e.target.value})}
                    placeholder="e.g., Analytics, Tools"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  <FaPlus /> Add Service
                </button>
              </form>

              <div className="services-list">
                <h3 className="list-title">Active Services ({services.length})</h3>
                {services.length === 0 ? (
                  <div className="empty-state">
                    <p>No services currently available</p>
                  </div>
                ) : (
                  <div className="service-cards">
                    {services.map(service => (
                      <div key={service.id} className="service-card">
                        <div className="card-content">
                          <h4>{service.name}</h4>
                          {service.category && (
                            <span className="service-category">{service.category}</span>
                          )}
                          {service.description && (
                            <p className="service-description">{service.description}</p>
                          )}
                        </div>
                        <button 
                          className="delete-btn"
                          onClick={() => deleteService(service.id)}
                          aria-label="Delete service"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemManager;
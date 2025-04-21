import { useState } from 'react';
import axios from 'axios';
import { FaKey, FaCopy, FaCheck, FaCogs, FaPlus, FaTrash } from 'react-icons/fa';
import '../Super.css';

const SystemManager = () => {
  // Key generation states
  const [generatedKey, setGeneratedKey] = useState('');
  const [copied, setCopied] = useState(false);

  // Service management states
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    category: ''
  });
  const [activeTab] = useState('services');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to copy the key to clipboard
  const copyToClipboard = (key) => {
    navigator.clipboard.writeText(key).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }).catch((err) => {
      console.error('Failed to copy key:', err);
    });
  };

  // Add new service with axios
  const addService = async (e) => {
    e.preventDefault();
    if (!newService.name) return;

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('/api/services/add/', newService, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data && response.data.service_id) {
        setServices([...services, { ...newService, id: response.data.service_id }]);
        setNewService({ name: '', description: '', category: '' });
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add service');
      console.error('Error adding service:', err);
    } finally {
      setLoading(false);
    }
  };

  // Delete service with axios
  const deleteService = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/api/services/${id}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setServices(services.filter(service => service.id !== id));
    } catch (err) {
      setError('Failed to delete service');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="system-manager">
      {/* Services Tab */}
      {activeTab === 'services' && (
        <div className="services-management">
          <h2 className="section-title">
            <FaCogs />
            Platform Services
          </h2>

          <form className="service-form" onSubmit={addService}>
            <h3 className="form-title">Add New Service</h3>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label>Service Name*</label>
              <input
                type="text"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                placeholder="e.g., Weather Forecast"
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                placeholder="Brief description of the service"
                rows="3"
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                placeholder="e.g., Analytics, Tools"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading || !newService.name}
            >
              {loading ? 'Adding...' : (
                <>
                  <FaPlus /> Add Service
                </>
              )}
            </button>
          </form>

          <div className="services-list">
            <h3 className="list-title">Active Services ({services.length})</h3>
            {loading && services.length === 0 ? (
              <div className="loading-state">
                <p>Loading services...</p>
              </div>
            ) : services.length === 0 ? (
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
                      disabled={loading}
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

      {/* Key Modal */}
      {generatedKey && (
        <div className="key-modal">
          <div className="modal-content">
            <h3><FaKey /> Generated Key</h3>
            <div className="key-display">{generatedKey}</div>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(generatedKey)}
            >
              {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Copied' : 'Copy Key'}
            </button>
            <button
              className="close-btn"
              onClick={() => setGeneratedKey('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemManager;
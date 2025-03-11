import React, { useState } from 'react';
import { Building2, Upload, Globe, TrendingUp, Eye, Clock, AlertCircle, List, LayoutGrid, Edit, Trash2, ExternalLink, MapPin, Home, Bed, Bath, Square, DollarSign, Users, Filter, ChevronLeft, ChevronRight, X, Phone, Mail } from 'lucide-react';

const PLATFORMS = [
  { id: '99co', name: '99.co', icon: Globe },
  { id: 'propertyguru', name: 'PropertyGuru', icon: Globe },
];

const SAMPLE_LISTINGS = [
  {
    id: 1,
    title: 'Modern Condo in District 15',
    address: '123 Marine Parade Road',
    price: 1250000,
    type: 'Condo',
    listingType: 'sale',
    beds: 3,
    baths: 2,
    sqft: 1200,
    status: 'active',
    views: 156,
    leads: 12,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Luxurious condo with unobstructed sea views. Recently renovated with high-end finishes.',
    features: ['Pool', 'Gym', 'Tennis Court', 'BBQ Pit'],
    lastUpdated: '2024-03-15',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'High demand in this area. Consider highlighting the sea view and proximity to upcoming MRT.',
    rentalYield: null,
  },
  {
    id: 2,
    title: 'Luxury Penthouse in Orchard',
    address: '789 Orchard Road',
    price: 5800000,
    type: 'Condo',
    listingType: 'sale',
    beds: 4,
    baths: 4,
    sqft: 2800,
    status: 'active',
    views: 234,
    leads: 15,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Prestigious penthouse with panoramic city views and private pool.',
    features: ['Private Pool', 'Smart Home', 'Private Lift', 'Wine Cellar'],
    lastUpdated: '2024-03-16',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'Luxury market showing strong interest. Highlight exclusive features.',
    rentalYield: null,
  },
  {
    id: 3,
    title: 'Executive HDB in Punggol',
    address: '456 Punggol Drive',
    price: 688000,
    type: 'HDB',
    listingType: 'sale',
    beds: 5,
    baths: 2,
    sqft: 1300,
    status: 'active',
    views: 189,
    leads: 8,
    performance: 'medium',
    images: [
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Spacious executive apartment with waterfront views.',
    features: ['Waterfront View', 'Near LRT', 'Renovated Kitchen'],
    lastUpdated: '2024-03-14',
    publishedOn: ['99.co'],
    aiSuggestions: 'Executive flats are trending in Punggol.',
    rentalYield: null,
  },
  {
    id: 4,
    title: 'Landed Property in Bukit Timah',
    address: '42 Bukit Timah Road',
    price: 4500000,
    type: 'Landed',
    listingType: 'sale',
    beds: 6,
    baths: 5,
    sqft: 3500,
    status: 'active',
    views: 178,
    leads: 6,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    ],
    description: 'Elegant semi-detached house with modern architecture.',
    features: ['Private Garden', 'Swimming Pool', 'Smart Home'],
    lastUpdated: '2024-03-17',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'Landed properties in high demand.',
    rentalYield: null,
  },
  {
    id: 5,
    title: 'Commercial Space in CBD',
    address: '100 Cecil Street',
    price: 3200000,
    type: 'Commercial',
    listingType: 'sale',
    beds: 0,
    baths: 2,
    sqft: 2000,
    status: 'active',
    views: 145,
    leads: 4,
    performance: 'medium',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    ],
    description: 'Prime office space in the heart of CBD.',
    features: ['24/7 Access', 'Meeting Rooms', 'Pantry'],
    lastUpdated: '2024-03-16',
    publishedOn: ['99.co'],
    aiSuggestions: 'Commercial property market recovering.',
    rentalYield: null,
  },
  {
    id: 6,
    title: 'Luxury Condo for Rent',
    address: '1 Amber Road',
    price: 5500,
    type: 'Condo',
    listingType: 'rental',
    beds: 3,
    baths: 2,
    sqft: 1500,
    status: 'active',
    views: 210,
    leads: 18,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Fully furnished luxury condo with sea view.',
    features: ['Pool', 'Gym', 'Tennis Court'],
    lastUpdated: '2024-03-15',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'High rental demand in East Coast area.',
    rentalYield: '3.5%',
  },
  {
    id: 7,
    title: 'Cozy Studio in Tiong Bahru',
    address: '55 Tiong Bahru Road',
    price: 2800,
    type: 'Condo',
    listingType: 'rental',
    beds: 1,
    baths: 1,
    sqft: 500,
    status: 'active',
    views: 167,
    leads: 12,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Charming studio in historic Tiong Bahru.',
    features: ['Furnished', 'Near MRT', 'Roof Garden'],
    lastUpdated: '2024-03-14',
    publishedOn: ['99.co'],
    aiSuggestions: 'Studios in high demand among young professionals.',
    rentalYield: '4.2%',
  },
  {
    id: 8,
    title: 'Family HDB in Tampines',
    address: '789 Tampines Ave 9',
    price: 2500,
    type: 'HDB',
    listingType: 'rental',
    beds: 4,
    baths: 2,
    sqft: 1200,
    status: 'active',
    views: 143,
    leads: 9,
    performance: 'medium',
    images: [
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

    ],
    description: 'Spacious family flat near Tampines Hub.',
    features: ['Near Mall', 'Schools Nearby', 'Park View'],
    lastUpdated: '2024-03-13',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'Family rentals stable in Tampines area.',
    rentalYield: '3.8%',
  },
  {
    id: 9,
    title: 'Office Space for Rent',
    address: '88 Market Street',
    price: 8500,
    type: 'Commercial',
    listingType: 'rental',
    beds: 0,
    baths: 2,
    sqft: 1800,
    status: 'active',
    views: 98,
    leads: 3,
    performance: 'medium',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Modern office space in prime location.',
    features: ['Meeting Rooms', 'Pantry', 'Reception'],
    lastUpdated: '2024-03-12',
    publishedOn: ['99.co'],
    aiSuggestions: 'Office rental market showing recovery.',
    rentalYield: '4.5%',
  },
  {
    id: 10,
    title: 'Serviced Apartment in Novena',
    address: '21 Novena Road',
    price: 4200,
    type: 'Condo',
    listingType: 'rental',
    beds: 2,
    baths: 2,
    sqft: 800,
    status: 'active',
    views: 176,
    leads: 14,
    performance: 'high',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ],
    description: 'Fully serviced apartment with hotel amenities.',
    features: ['Daily Cleaning', 'Concierge', 'Gym'],
    lastUpdated: '2024-03-11',
    publishedOn: ['99.co', 'PropertyGuru'],
    aiSuggestions: 'Serviced apartments popular with expatriates.',
    rentalYield: '4.0%',
  }
];

const INTERESTED_PARTIES = {
  1: [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@email.com', phone: '+65 9123 4567', status: 'Very Interested', lastContact: '2024-03-18', notes: 'Scheduled for second viewing' },
    { id: 2, name: 'Michael Tan', email: 'michael.t@email.com', phone: '+65 9876 5432', status: 'Interested', lastContact: '2024-03-17', notes: 'Requested floor plans' },
    { id: 3, name: 'Lisa Wong', email: 'lisa.w@email.com', phone: '+65 9345 6789', status: 'Considering', lastContact: '2024-03-16', notes: 'Comparing with other properties' }
  ],
  2: [
    { id: 1, name: 'John Lee', email: 'john.lee@email.com', phone: '+65 9234 5678', status: 'Very Interested', lastContact: '2024-03-18', notes: 'Ready to sign lease' },
    { id: 2, name: 'Amy Lim', email: 'amy.l@email.com', phone: '+65 9567 8901', status: 'Interested', lastContact: '2024-03-17', notes: 'Negotiating terms' }
  ]
};

export default function PropertyListings() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [listingTypeFilter, setListingTypeFilter] = useState('all');
  const [selectedListing, setSelectedListing] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [newListing, setNewListing] = useState({
    title: '',
    address: '',
    price: '',
    type: 'Condo',
    listingType: 'sale',
    beds: '',
    baths: '',
    sqft: '',
    description: '',
    features: [],
    images: [],
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setNewListing(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const handleFeatureChange = (feature) => {
    setNewListing(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New listing:', newListing);
    setShowUploadModal(false);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setActiveImageIndex(0);
    setShowDetailsModal(true);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % selectedProperty.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
  };

  const filteredListings = SAMPLE_LISTINGS.filter(listing => 
    listingTypeFilter === 'all' || listing.listingType === listingTypeFilter
  );

  const getRentalInsights = () => {
    const rentalListings = SAMPLE_LISTINGS.filter(l => l.listingType === 'rental');
    const avgRentalYield = rentalListings
      .filter(l => l.rentalYield)
      .reduce((acc, curr) => acc + parseFloat(curr.rentalYield), 0) / rentalListings.length;
    
    return {
      avgYield: avgRentalYield.toFixed(1),
      totalRentals: rentalListings.length,
      highPerformance: rentalListings.filter(l => l.performance === 'high').length,
    };
  };

  const rentalInsights = getRentalInsights();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Property Listings</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
            <button
              onClick={() => setListingTypeFilter('all')}
              className={`px-4 py-2 rounded ${listingTypeFilter === 'all' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setListingTypeFilter('sale')}
              className={`px-4 py-2 rounded ${listingTypeFilter === 'sale' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
            >
              For Sale
            </button>
            <button
              onClick={() => setListingTypeFilter('rental')}
              className={`px-4 py-2 rounded ${listingTypeFilter === 'rental' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
            >
              For Rent
            </button>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center"
          >
            <Upload className="h-5 w-5 mr-2" />
            New Listing
          </button>
        </div>
      </div>

      {listingTypeFilter === 'rental' && (
        <div className="bg-indigo-50 p-4 rounded-xl mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-indigo-600 mt-1" />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Rental Market Insights</h3>
              <p className="text-gray-600">
                Average rental yield is {rentalInsights.avgYield}% across {rentalInsights.totalRentals} properties. 
                {rentalInsights.highPerformance} properties are performing above market average.
              </p>
              <div className="mt-2 text-sm">
                <span className="text-indigo-600 font-medium">AI Recommendation:</span>
                <span className="text-gray-600"> Consider adjusting rental prices for properties with yields below {(parseFloat(rentalInsights.avgYield) - 0.5).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transform transition hover:scale-[1.02]"
              onClick={() => handlePropertyClick(listing)}
            >
              <div className="relative h-48">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                  listing.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {listing.status === 'active' ? 'Active' : 'Pending'}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{listing.title}</h3>
                <p className="text-gray-600 mb-3">{listing.address}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {listing.listingType === 'rental' ? `S$${listing.price}/mo` : `S$${listing.price.toLocaleString()}`}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span>{listing.beds} beds</span>
                    <span>{listing.baths} baths</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Views</div>
                      <div className="font-semibold text-gray-900 flex items-center justify-center">
                        <Eye className="h-4 w-4 mr-1 text-gray-400" />
                        {listing.views}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Leads</div>
                      <div className="font-semibold text-gray-900">{listing.leads}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Performance</div>
                      <div className="font-semibold text-gray-900 flex items-center justify-center">
                        <TrendingUp className={`h-4 w-4 mr-1 ${
                          listing.performance === 'high' ? 'text-green-500' : 'text-yellow-500'
                        }`} />
                        {listing.performance}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredListings.map((listing) => (
                <tr 
                  key={listing.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handlePropertyClick(listing)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                        <div className="text-sm text-gray-500">{listing.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{listing.type}</div>
                    <div className="text-sm text-gray-500">
                      {listing.beds} beds • {listing.baths} baths • {listing.sqft} sqft
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {listing.listingType === 'rental' ? `S$${listing.price}/mo` : `S$${listing.price.toLocaleString()}`}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      listing.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {listing.views} views • {listing.leads} leads
                    </div>
                    <div className="text-sm text-gray-500">
                      Performance: {listing.performance}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showDetailsModal && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="relative h-96">
                <img
                  src={selectedProperty.images[activeImageIndex]}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProperty.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full ${
                        activeImageIndex === index ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProperty.title}</h2>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {selectedProperty.address}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">
                    {selectedProperty.listingType === 'rental'
                      ? `S$${selectedProperty.price}/mo`
                      : `S$${selectedProperty.price.toLocaleString()}`}
                  </div>
                  <div className={`mt-2 inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProperty.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedProperty.status === 'active' ? 'Active' : 'Pending'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Bedrooms</div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    {selectedProperty.beds}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Bathrooms</div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    {selectedProperty.baths}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Area</div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <Square className="h-5 w-5 mr-2" />
                    {selectedProperty.sqft} sqft
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Type</div>
                  <div className="font-semibold text-gray-900 flex items-center">
                    <Home className="h-5 w-5 mr-2" />
                    {selectedProperty.type}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600">{selectedProperty.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Views</div>
                    <div className="font-semibold text-gray-900 flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      {selectedProperty.views}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Leads</div>
                    <div className="font-semibold text-gray-900 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {selectedProperty.leads}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Performance</div>
                    <div className="font-semibold text-gray -900 flex items-center">
                      <TrendingUp className={`h-5 w-5 mr-2 ${
                        selectedProperty.performance === 'high' ? 'text-green-500' : 'text-yellow-500'
                      }`} />
                      {selectedProperty.performance}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Insights</h3>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-gray-700">{selectedProperty.aiSuggestions}</p>
                </div>
              </div>

              {/* Publishing Status */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Publishing Status</h3>
                <div className="flex gap-2">
                  {selectedProperty.publishedOn.map((platform, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interested Parties */}
              {INTERESTED_PARTIES[selectedProperty.id] && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interested Parties</h3>
                  <div className="space-y-4">
                    {INTERESTED_PARTIES[selectedProperty.id].map((party) => (
                      <div key={party.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{party.name}</h4>
                            <div className="mt-1 space-y-1">
                              <p className="text-sm text-gray-600 flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                {party.email}
                              </p>
                              <p className="text-sm text-gray-600 flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                {party.phone}
                              </p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            party.status === 'Very Interested'
                              ? 'bg-green-100 text-green-800'
                              : party.status === 'Interested'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {party.status}
                          </span>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Last Contact:</span> {party.lastContact}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Notes:</span> {party.notes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
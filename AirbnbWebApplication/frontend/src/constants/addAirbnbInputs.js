const inputs = {
    name: {
      id: 'i1',
      name: 'name',
      type: 'text',
      placeholder: 'Name of the Airbnb',
      label: 'name',
      required: true,
    },
    address: {
      id: 'i2_1',
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'address',
      required: true,
    },
    house_number: {
      id: 'i2_2',
      name: 'house_number',
      type: 'string',
      placeholder: 'House number',
      label: 'house_number',
      required: true,
    },
    accommodates: {
      id: 'i3',
      name: 'accommodates',
      type: 'number',
      placeholder: 'Number of accommodates',
      label: 'accommodates',
      required: true,
      min: 0
    },
    beds: {
      id: 'i4',
      name: 'beds',
      type: 'number',
      placeholder: 'Number of beds',
      label: 'beds',
      required: true,
      min: 0
    },
    bedrooms: {
      id: 'i5',
      name: 'bedrooms',
      type: 'number',
      placeholder: 'Number of bedrooms',
      label: 'bedrooms',
      required: true,
      min: 0
    },
    n_bathrooms: {
      id: 'i6',
      name: 'n_bathrooms',
      type: 'number',
      placeholder: 'Number of bathrooms',
      label: 'n_bathrooms',
      required: true,
      min: 0
    },
    availability_365: {
      id: 'i7',
      name: 'availability_365',
      type: 'text',
      placeholder: 'Number of days your Airbnb is available (in a year)',
      label: 'availability_365',
      required: true,
      min: 0,
      max: 365
    },
    latitude: {
      id: 'i8',
      name: 'latitude',
      type: 'number',
      step:'any',
      placeholder: 'Latitude',
      label: 'latitude',
      required: true,
    },
    longitude: {
      id: 'i9',
      name: 'longitude',
      step:'any',
      type: 'number',
      placeholder: 'Longitude',
      label: 'longitude',
      required: true,
    },
    price: {
      id: 'i10',
      name: 'price',
      step:'any',
      type: 'number',
      placeholder: 'Price',
      label: 'price',
      required: true,
      min: 0
    },
    minimum_nights: {
      id: 'i11',
      name: 'minimum_nights',
      type: 'number',
      placeholder: 'Minimum nights',
      label: 'minimum_nights',
      required: true,
      min: 1
    }
  }

export default inputs
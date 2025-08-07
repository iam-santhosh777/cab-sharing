# Ride Sharing Components

This folder contains the modular components for the RideSharingApp. The components have been split for better maintainability, reusability, and code organization.

## Component Structure

```
ride-sharing/
├── index.js              # Barrel export for all components
├── Header.jsx            # Navigation header with logo and action buttons
├── Hero.jsx              # Main hero section with title and subtitle
├── SearchForm.jsx        # Main search form container
├── LocationInput.jsx     # Reusable location input field
├── PopularRoutes.jsx     # Popular routes section
├── RouteCard.jsx         # Individual route card component
└── README.md             # This documentation file
```

## Components

### Header
- **Purpose**: Navigation header with logo and action buttons
- **Props**: 
  - `onPublishRide`: Function to handle publish ride button click
  - `onProfile`: Function to handle profile button click

### Hero
- **Purpose**: Main hero section with title and subtitle
- **Props**: None (static content)

### SearchForm
- **Purpose**: Main search form container that combines location inputs, date picker, and passenger counter
- **Props**:
  - `searchData`: Object containing form data (from, to, date, passengers)
  - `onInputChange`: Function to handle input changes
  - `onDateChange`: Function to handle date changes
  - `onPassengerChange`: Function to handle passenger count changes
  - `onSubmit`: Function to handle form submission

### LocationInput
- **Purpose**: Reusable location input field with icon and styling
- **Props**:
  - `id`: Input field ID
  - `name`: Input field name
  - `value`: Current input value
  - `onChange`: Function to handle input changes
  - `label`: Label text for the input
  - `placeholder`: Placeholder text for the input

### PopularRoutes
- **Purpose**: Section displaying popular routes
- **Props**: None (uses static data)

### RouteCard
- **Purpose**: Individual route card component
- **Props**:
  - `route`: Object containing route data (from, to, price, time)

## Usage

```jsx
import { Header, Hero, SearchForm, PopularRoutes } from './ride-sharing'

function RideSharingApp() {
  // State and handlers...

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onPublishRide={handlePublishRide} onProfile={handleProfile} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <SearchForm
          searchData={searchData}
          onInputChange={handleInputChange}
          onDateChange={handleDateChange}
          onPassengerChange={handlePassengerChange}
          onSubmit={handleSearch}
        />
        <PopularRoutes />
      </main>
    </div>
  )
}
```

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused in other parts of the application
3. **Maintainability**: Easier to maintain and update individual components
4. **Testability**: Each component can be tested independently
5. **Code Splitting**: Better for performance and bundle optimization
6. **Team Collaboration**: Different team members can work on different components simultaneously 
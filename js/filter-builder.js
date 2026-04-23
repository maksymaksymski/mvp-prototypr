(function () {
  'use strict';

  /* =============================================
     FIELD DEFINITIONS
  ============================================= */
  var TAG_VALUES = [
    'Absentee Owner','Absentee Owner — In State','Absentee Owner — Out of State',
    'Out of State Owner','Owner Occupied','Vacant (USPS Flagged)','Vacant Lot',
    'Mailing Address Vacant','High Equity (20%+)','Low Equity (under 20%)',
    'Unknown Equity','Free & Clear (No Mortgage)','Cash Buyer','Pre-Foreclosure',
    'Notice of Default','Notice of Lis Pendens','Notice of Sale','Tax Default',
    'Has Involuntary Lien','Active Listing','On Market','Pending Listing',
    'Expired Listing','Canceled Listing','Failed Listing','For Sale By Owner',
    'Listed Below Market Price','Active Auction','Recently Sold (Last 12 Months)',
    'Fix & Flip (Bought & Sold Last 12 Mo)','Inherited Property','Senior Owner',
    'Tired Landlord','Corporate Owned','Trust Owned','Has HOA','Has HOA Fees',
    'Same Property & Mailing Address'
  ];

  var STATE_VALUES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN',
    'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM',
    'NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'];

  var FIELD_GROUPS = [
    {
      label: 'Tags',
      fields: [
        { key: 'quickLists.*', label: 'Tags', controlType: 'tags', knownValues: TAG_VALUES }
      ]
    },
    {
      label: 'Location',
      fields: [
        { key: 'address.street', label: 'Street Address', controlType: 'text-input' },
        { key: 'address.houseNumber', label: 'House Number', controlType: 'text-input' },
        { key: 'address.unitNumber', label: 'Unit Number', controlType: 'text-input' },
        { key: 'address.unitType', label: 'Unit Type', controlType: 'text-input' },
        { key: 'address.city', label: 'City', controlType: 'multiselect-open' },
        { key: 'address.county', label: 'County', controlType: 'multiselect-open' },
        { key: 'address.state', label: 'State', controlType: 'multiselect', knownValues: STATE_VALUES },
        { key: 'address.zip', label: 'ZIP Code', controlType: 'multiselect-open' },
        { key: 'address.zipPlus4', label: 'ZIP+4', controlType: 'text-input' },
        { key: 'address.countyFipsCode', label: 'County FIPS Code', controlType: 'text-input' },
        { key: 'address.cbsaTitle', label: 'Metro Area (CBSA)', controlType: 'multiselect-open' },
        { key: 'address.csaTitle', label: 'Combined Statistical Area', controlType: 'multiselect-open' },
        { key: 'address.metroDivisionTitle', label: 'Metro Division', controlType: 'multiselect-open' },
        { key: 'address.streetNoUnit', label: 'Street (No Unit)', controlType: 'text-input' },
        { key: 'address.formattedStreet', label: 'Formatted Street', controlType: 'text-input' },
        { key: 'address.addressValidity', label: 'Address Validity', controlType: 'single-select', knownValues: ['Valid','Invalid','Partially Valid'] },
        { key: 'general.censusTract', label: 'Census Tract', controlType: 'text-input' },
        { key: 'general.congressionalDistrict', label: 'Congressional District', controlType: 'text-input' },
        { key: 'general.schoolDistrict', label: 'School District', controlType: 'multiselect-open' },
        { key: 'ids.apn', label: 'Assessor Parcel Number (APN)', controlType: 'text-input' },
        { key: 'ids.fipsCode', label: 'FIPS Code', controlType: 'text-input' },
        { key: 'ids.taxId', label: 'Tax ID', controlType: 'text-input' },
        { key: 'legal.subdivisionName', label: 'Subdivision Name', controlType: 'multiselect-open' },
        { key: 'legal.cityTownshipMunicipality', label: 'City / Township / Municipality', controlType: 'multiselect-open' },
        { key: 'legal.district', label: 'District', controlType: 'text-input' },
        { key: 'legal.block', label: 'Block', controlType: 'text-input' },
        { key: 'legal.section', label: 'Section', controlType: 'text-input' },
        { key: 'legal.landLot', label: 'Land Lot', controlType: 'text-input' },
        { key: 'legal.lotNumber', label: 'Lot Number', controlType: 'text-input' },
        { key: 'legal.legalUnit', label: 'Legal Unit', controlType: 'text-input' },
        { key: 'legal.phaseNumber', label: 'Phase Number', controlType: 'text-input' },
        { key: 'legal.tractNumber', label: 'Tract Number', controlType: 'text-input' },
        { key: 'listing.neighborhood', label: 'Neighborhood', controlType: 'multiselect-open' },
        { key: 'listing.subDivision', label: 'Subdivision (Listing)', controlType: 'multiselect-open' },
        { key: 'listing.schools.[n].district', label: 'School District (Listing)', controlType: 'multiselect-open' },
        { key: 'listing.schools.[n].name', label: 'School Name', controlType: 'multiselect-open' },
        { key: 'listing.schools.[n].category', label: 'School Category', controlType: 'single-select', knownValues: [] }
      ]
    },
    {
      label: 'Property Type & General Info',
      fields: [
        { key: 'general.propertyTypeCategory', label: 'Property Type', controlType: 'multiselect', knownValues: ['Agricultural','Commercial','Exempt','Industrial','Miscellaneous','Office','Recreational','Residential','Vacant Land'] },
        { key: 'general.propertyTypeDetail', label: 'Property Type Detail', controlType: 'multiselect', knownValues: [] },
        { key: 'general.vacant', label: 'Vacant', controlType: 'flag' },
        { key: 'general.mailingAddressVacant', label: 'Mailing Address Vacant', controlType: 'flag' },
        { key: 'general.parcelCount', label: 'Parcel Count', controlType: 'number-range' },
        { key: 'general.primaryParcel', label: 'Primary Parcel', controlType: 'flag' },
        { key: 'lot.zoningCode', label: 'Zoning Code', controlType: 'multiselect-open' },
        { key: 'lot.siteInfluence', label: 'Site Influence', controlType: 'multiselect-open' },
        { key: 'lot.topography', label: 'Topography', controlType: 'multiselect-open' },
        { key: 'listing.propertySubtype', label: 'Property Subtype (Listing)', controlType: 'multiselect-open' },
        { key: 'listing.architecturalStyle', label: 'Architectural Style', controlType: 'multiselect-open' },
        { key: 'listing.newConstruction', label: 'New Construction (Listing)', controlType: 'flag' }
      ]
    },
    {
      label: 'Building Details',
      fields: [
        { key: 'building.yearBuilt', label: 'Year Built', controlType: 'number-range' },
        { key: 'building.effectiveYearBuilt', label: 'Effective Year Built', controlType: 'number-range' },
        { key: 'building.buildingType', label: 'Building Type', controlType: 'multiselect-open' },
        { key: 'building.buildingClass', label: 'Building Class', controlType: 'multiselect', knownValues: [] },
        { key: 'building.buildingCondition', label: 'Building Condition', controlType: 'multiselect', knownValues: ['Average','Excellent','Fair','Good','Poor','Unsound','Very Good'] },
        { key: 'building.buildingQuality', label: 'Building Quality', controlType: 'multiselect', knownValues: ['A','A-','A+','B','B-','B+','C','C-','C+','D','D-','D+','E','E-','E+'] },
        { key: 'building.buildingCount', label: 'Building Count', controlType: 'number-range' },
        { key: 'building.constructionType', label: 'Construction Type', controlType: 'multiselect', knownValues: ['Adobe','Brick','Concrete','Concrete Block','Dome','Frame','Heavy','Light','Log','Manufactured','Masonry','Metal','Mixed','Other','Steel','Stone','Tilt-Up','Wood'] },
        { key: 'building.style', label: 'Building Style', controlType: 'multiselect', knownValues: [] },
        { key: 'building.storyCount', label: 'Number of Stories', controlType: 'number-range' },
        { key: 'building.storyCountDescription', label: 'Story Description', controlType: 'multiselect-open' },
        { key: 'building.unitCount', label: 'Total Units', controlType: 'number-range' },
        { key: 'building.residentialUnitCount', label: 'Residential Units', controlType: 'number-range' },
        { key: 'building.commercialUnitCount', label: 'Commercial Units', controlType: 'number-range' },
        { key: 'building.livingAreaSquareFeet', label: 'Living Area (Sq Ft)', controlType: 'number-range' },
        { key: 'building.totalBuildingAreaSquareFeet', label: 'Total Building Area (Sq Ft)', controlType: 'number-range' },
        { key: 'building.groundFloorAreaSquareFeet', label: 'Ground Floor Area (Sq Ft)', controlType: 'number-range' },
        { key: 'building.roomCount', label: 'Total Rooms', controlType: 'number-range' },
        { key: 'building.bedroomCount', label: 'Bedrooms', controlType: 'number-range' },
        { key: 'building.bathroomCount', label: 'Total Bathrooms', controlType: 'number-range' },
        { key: 'building.fullBathroomCount', label: 'Full Bathrooms', controlType: 'number-range' },
        { key: 'building.partialBathroomCount', label: 'Partial Bathrooms', controlType: 'number-range' },
        { key: 'building.calculatedBathroomCount', label: 'Calculated Bathrooms', controlType: 'number-range' },
        { key: 'building.bathFixtureCount', label: 'Bath Fixture Count', controlType: 'number-range' },
        { key: 'building.fireplaceCount', label: 'Fireplaces', controlType: 'number-range' },
        { key: 'building.garage', label: 'Garage', controlType: 'multiselect', knownValues: [] },
        { key: 'building.garageSquareFeet', label: 'Garage (Sq Ft)', controlType: 'number-range' },
        { key: 'building.garageFinishedSquareFeet', label: 'Garage Finished (Sq Ft)', controlType: 'number-range' },
        { key: 'building.garageUnfinishedSquareFeet', label: 'Garage Unfinished (Sq Ft)', controlType: 'number-range' },
        { key: 'building.garageParkingSpaceCount', label: 'Garage Parking Spaces', controlType: 'number-range' },
        { key: 'building.pool', label: 'Pool', controlType: 'multiselect', knownValues: ['Above-Ground Pool','Community Pool or Spa','Enclosed','Heated Pool','Indoor Pool','In-Ground Pool','Pool - Yes','Pool & Spa','Solar Heated','Spa or Hot Tub (only)','Vinyl In-Ground Pool'] },
        { key: 'building.patio', label: 'Patio', controlType: 'multiselect', knownValues: [] },
        { key: 'building.porch', label: 'Porch', controlType: 'multiselect', knownValues: [] },
        { key: 'building.driveway', label: 'Driveway', controlType: 'multiselect', knownValues: [] },
        { key: 'building.roofType', label: 'Roof Type', controlType: 'multiselect', knownValues: ['Bowstring Truss','Dome','Flat','Gable','Gable or Hip','Gambrel','Hip','Irr/Cathedral','Mansard','Prestress Concrete','Reinforced Concrete','Rigid Frame Bar Joist','Sawtooth','Shed','Steel Frame/Truss','Wood Truss'] },
        { key: 'building.roofCover', label: 'Roof Cover', controlType: 'multiselect', knownValues: [] },
        { key: 'building.foundation', label: 'Foundation Type', controlType: 'multiselect-open' },
        { key: 'building.exteriorWalls', label: 'Exterior Walls', controlType: 'multiselect', knownValues: [] },
        { key: 'building.interiorWalls', label: 'Interior Walls', controlType: 'multiselect', knownValues: [] },
        { key: 'building.floorCover', label: 'Floor Cover', controlType: 'multiselect', knownValues: [] },
        { key: 'building.airConditioningSource', label: 'Air Conditioning', controlType: 'multiselect', knownValues: ['Central','Chilled Water','Evaporative Cooler','Geo-Thermal','Office only','Other','Packaged Unit','Partial','Refrigeration','Ventilation','Wall','Window Unit','Yes'] },
        { key: 'building.heatSource', label: 'Heat Source', controlType: 'multiselect', knownValues: [] },
        { key: 'building.heatingFuelType', label: 'Heating Fuel Type', controlType: 'multiselect', knownValues: ['Butane','Coal','Electric','Gas','Geo-Thermal','Oil','Propane','Solar','Wood'] },
        { key: 'building.sewer', label: 'Sewer Type', controlType: 'multiselect', knownValues: ['Municipal','Septic','Storm','Yes'] },
        { key: 'building.waterService', label: 'Water Service', controlType: 'multiselect', knownValues: ['Cistern','Municipal','Spring','Well','Yes'] },
        { key: 'building.otherRooms', label: 'Other Rooms', controlType: 'multiselect-open' },
        { key: 'building.atticSquareFeet', label: 'Attic (Sq Ft)', controlType: 'number-range' },
        { key: 'building.atticFinishedSquareFeet', label: 'Attic Finished (Sq Ft)', controlType: 'number-range' },
        { key: 'building.atticUnfinishedSquareFeet', label: 'Attic Unfinished (Sq Ft)', controlType: 'number-range' },
        { key: 'building.basementType', label: 'Basement Type', controlType: 'multiselect', knownValues: ['Basement (not specified)','Daylight','First Floor','Daylight/Walkout','Full Basement','Improved Basement (Finished)','Partial','Partial Basement','Unfinished Basement'] },
        { key: 'building.basementSquareFeet', label: 'Basement (Sq Ft)', controlType: 'number-range' },
        { key: 'building.basementFinishedSquareFeet', label: 'Basement Finished (Sq Ft)', controlType: 'number-range' },
        { key: 'building.basementUnfinishedSquareFeet', label: 'Basement Unfinished (Sq Ft)', controlType: 'number-range' },
        { key: 'listing.bedroomCount', label: 'Bedrooms (Listing)', controlType: 'number-range' },
        { key: 'listing.fullBathroomCount', label: 'Full Bathrooms (Listing)', controlType: 'number-range' },
        { key: 'listing.halfBathroomCount', label: 'Half Bathrooms (Listing)', controlType: 'number-range' },
        { key: 'listing.partialBathroomCount', label: 'Partial Bathrooms (Listing)', controlType: 'number-range' },
        { key: 'listing.oneQuarterBathroomCount', label: 'Quarter Bathrooms (Listing)', controlType: 'number-range' },
        { key: 'listing.floorCount', label: 'Stories (Listing)', controlType: 'number-range' },
        { key: 'listing.parkingSpaceCount', label: 'Parking Spaces (Listing)', controlType: 'number-range' },
        { key: 'listing.hasFireplace', label: 'Has Fireplace (Listing)', controlType: 'flag' },
        { key: 'listing.exteriorConstruction', label: 'Exterior Construction (Listing)', controlType: 'multiselect-open' }
      ]
    },
    {
      label: 'Lot & Land',
      fields: [
        { key: 'lot.lotSizeSquareFeet', label: 'Lot Size (Sq Ft)', controlType: 'number-range' },
        { key: 'lot.lotSizeAcres', label: 'Lot Size (Acres)', controlType: 'number-range' },
        { key: 'lot.lotDepthFeet', label: 'Lot Depth (ft)', controlType: 'number-range' },
        { key: 'lot.lotFrontageFeet', label: 'Lot Frontage (ft)', controlType: 'number-range' },
        { key: 'listing.lotSizeSquareFeet', label: 'Lot Size — Listing (Sq Ft)', controlType: 'number-range' }
      ]
    },
    {
      label: 'Owner',
      fields: [
        { key: 'owner.fullName', label: 'Owner Full Name', controlType: 'text-input' },
        { key: 'owner.names.[n].first', label: 'Owner First Name', controlType: 'text-input' },
        { key: 'owner.names.[n].last', label: 'Owner Last Name', controlType: 'text-input' },
        { key: 'owner.names.[n].middle', label: 'Owner Middle Name', controlType: 'text-input' },
        { key: 'owner.names.[n].full', label: 'Owner Full Name (Parsed)', controlType: 'text-input' },
        { key: 'owner.ownerOccupied', label: 'Owner Occupied', controlType: 'flag' },
        { key: 'owner.ownershipRights', label: 'Ownership Rights', controlType: 'multiselect-open' },
        { key: 'owner.ownershipStartDate', label: 'Ownership Start Date', controlType: 'date-range' },
        { key: 'owner.ownerStatusType', label: 'Owner Status', controlType: 'single-select', knownValues: ['Company Owned','Individual'] },
        { key: 'owner.lengthOfResidenceYears', label: 'Length of Residence (Years)', controlType: 'number-range' },
        { key: 'owner.lengthOfResidenceMonths', label: 'Length of Residence (Months)', controlType: 'number-range' },
        { key: 'owner.mailingAddress.street', label: 'Owner Mailing Street', controlType: 'text-input' },
        { key: 'owner.mailingAddress.city', label: 'Owner Mailing City', controlType: 'multiselect-open' },
        { key: 'owner.mailingAddress.county', label: 'Owner Mailing County', controlType: 'multiselect-open' },
        { key: 'owner.mailingAddress.state', label: 'Owner Mailing State', controlType: 'multiselect', knownValues: STATE_VALUES },
        { key: 'owner.mailingAddress.zip', label: 'Owner Mailing ZIP', controlType: 'multiselect-open' },
        { key: 'owner.mailingAddress.zipPlus4', label: 'Owner Mailing ZIP+4', controlType: 'text-input' },
        { key: 'owner.mailingAddress.houseNumber', label: 'Owner Mailing House Number', controlType: 'text-input' },
        { key: 'owner.mailingAddress.unitNumber', label: 'Owner Mailing Unit Number', controlType: 'text-input' },
        { key: 'owner.mailingAddress.unitType', label: 'Owner Mailing Unit Type', controlType: 'text-input' },
        { key: 'owner.mailingAddress.streetNoUnit', label: 'Owner Mailing Street (No Unit)', controlType: 'text-input' },
        { key: 'owner.mailingAddress.formattedStreet', label: 'Owner Mailing Formatted Street', controlType: 'text-input' },
        { key: 'owner.mailingAddress.addressValidity', label: 'Owner Mailing Address Validity', controlType: 'single-select', knownValues: ['Valid','Invalid','Partially Valid'] }
      ]
    },
    {
      label: 'Owner Portfolio',
      fields: [
        { key: 'propertyOwnerProfile.propertiesCount', label: 'Number of Properties Owned', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.propertiesTotalEquity', label: 'Total Portfolio Equity', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.propertiesTotalEstimatedValue', label: 'Total Portfolio Estimated Value', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.totalPurchasePrice', label: 'Total Portfolio Purchase Price', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.averageAssessedValue', label: 'Avg Assessed Value (Portfolio)', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.averagePurchasePrice', label: 'Avg Purchase Price (Portfolio)', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.averageYearBuilt', label: 'Avg Year Built (Portfolio)', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.mortgagesCount', label: 'Number of Mortgages (Portfolio)', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.mortgagesAverageBalance', label: 'Avg Mortgage Balance (Portfolio)', controlType: 'number-range' },
        { key: 'propertyOwnerProfile.mortgagesTotalBalance', label: 'Total Mortgage Balance (Portfolio)', controlType: 'number-range' }
      ]
    },
    {
      label: 'Financials & Equity',
      fields: [
        { key: 'assessment.totalAssessedValue', label: 'Total Assessed Value', controlType: 'number-range' },
        { key: 'assessment.totalMarketValue', label: 'Total Market Value', controlType: 'number-range' },
        { key: 'assessment.assessedLandValue', label: 'Assessed Land Value', controlType: 'number-range' },
        { key: 'assessment.assessedImprovementValue', label: 'Assessed Improvement Value', controlType: 'number-range' },
        { key: 'assessment.landMarketValue', label: 'Land Market Value', controlType: 'number-range' },
        { key: 'assessment.improvementMarketValue', label: 'Improvement Market Value', controlType: 'number-range' },
        { key: 'assessment.assessmentYear', label: 'Assessment Year', controlType: 'number-range' },
        { key: 'assessment.marketValueYear', label: 'Market Value Year', controlType: 'number-range' },
        { key: 'valuation.estimatedValue', label: 'Estimated Value (AVM)', controlType: 'number-range' },
        { key: 'valuation.equityPercent', label: 'Equity %', controlType: 'number-range' },
        { key: 'valuation.equityCurrentEstimatedBalance', label: 'Estimated Equity ($)', controlType: 'number-range' },
        { key: 'valuation.ltv', label: 'Loan-to-Value (LTV) %', controlType: 'number-range' },
        { key: 'valuation.priceRangeMin', label: 'Estimated Value — Min', controlType: 'number-range' },
        { key: 'valuation.priceRangeMax', label: 'Estimated Value — Max', controlType: 'number-range' },
        { key: 'valuation.confidenceScore', label: 'AVM Confidence Score', controlType: 'number-range' }
      ]
    },
    {
      label: 'Tax',
      fields: [
        { key: 'tax.taxAmount', label: 'Annual Tax Amount', controlType: 'number-range' },
        { key: 'tax.taxYear', label: 'Tax Year', controlType: 'number-range' },
        { key: 'tax.taxDelinquentYear', label: 'Tax Delinquent Year', controlType: 'number-range' },
        { key: 'tax.taxExemptions', label: 'Tax Exemptions', controlType: 'multiselect-open' },
        { key: 'tax.taxRateCodeArea', label: 'Tax Rate Code Area', controlType: 'text-input' },
        { key: 'tax.schoolTaxDistrictCodes', label: 'School Tax District', controlType: 'multiselect-open' }
      ]
    },
    {
      label: 'Sale & Transaction History',
      fields: [
        { key: 'intel.lastSoldDate', label: 'Last Sold Date', controlType: 'date-range' },
        { key: 'intel.lastSoldPrice', label: 'Last Sold Price', controlType: 'number-range' },
        { key: 'sale.priorSale.saleDate', label: 'Prior Sale Date', controlType: 'date-range' },
        { key: 'sale.priorSale.price', label: 'Prior Sale Price', controlType: 'number-range' },
        { key: 'sale.priorSale.pricePerSquareFoot', label: 'Prior Sale Price Per Sq Ft', controlType: 'number-range' },
        { key: 'sale.priorSale.recordingDate', label: 'Prior Sale Recording Date', controlType: 'date-range' },
        { key: 'sale.priorSale.documentType', label: 'Prior Sale Document Type', controlType: 'multiselect', knownValues: [] },
        { key: 'sale.priorSale.transactionType', label: 'Prior Sale Transaction Type', controlType: 'multiselect-open' },
        { key: 'sale.priorSale.salePriceIsEstimated', label: 'Prior Sale Price Is Estimated', controlType: 'flag' },
        { key: 'sale.lastTransfer.saleDate', label: 'Last Transfer Date', controlType: 'date-range' },
        { key: 'sale.lastTransfer.price', label: 'Last Transfer Price', controlType: 'number-range' },
        { key: 'sale.lastTransfer.pricePerSquareFoot', label: 'Last Transfer Price Per Sq Ft', controlType: 'number-range' },
        { key: 'sale.lastTransfer.recordingDate', label: 'Last Transfer Recording Date', controlType: 'date-range' },
        { key: 'sale.lastTransfer.documentType', label: 'Last Transfer Document Type', controlType: 'multiselect', knownValues: [] },
        { key: 'sale.lastTransfer.salePriceIsEstimated', label: 'Last Transfer Price Is Estimated', controlType: 'flag' },
        { key: 'sale.priorTransfer.price', label: 'Prior Transfer Price', controlType: 'number-range' },
        { key: 'sale.priorTransfer.pricePerSquareFoot', label: 'Prior Transfer Price Per Sq Ft', controlType: 'number-range' },
        { key: 'sale.priorTransfer.salePriceIsEstimated', label: 'Prior Transfer Price Is Estimated', controlType: 'flag' },
        { key: 'sale.priorTransfer.documentType', label: 'Prior Transfer Document Type', controlType: 'multiselect', knownValues: [] },
        { key: 'sale.flipLength', label: 'Flip Length (Days)', controlType: 'number-range' },
        { key: 'sale.flipLengthCategory', label: 'Flip Length Category', controlType: 'multiselect', knownValues: ['3','6','12','24'] },
        { key: 'sale.flipProfit', label: 'Flip Profit', controlType: 'number-range' },
        { key: 'deedHistory.[n].saleDate', label: 'Deed Sale Date', controlType: 'date-range' },
        { key: 'deedHistory.[n].salePrice', label: 'Deed Sale Price', controlType: 'number-range' },
        { key: 'deedHistory.[n].documentType', label: 'Deed Document Type', controlType: 'multiselect', knownValues: [] },
        { key: 'deedHistory.[n].transactionType', label: 'Deed Transaction Type', controlType: 'multiselect-open' },
        { key: 'deedHistory.[n].recordingDate', label: 'Deed Recording Date', controlType: 'date-range' },
        { key: 'deedHistory.[n].documentDate', label: 'Deed Document Date', controlType: 'date-range' },
        { key: 'deedHistory.[n].foreclosure', label: 'Deed — Foreclosure Sale', controlType: 'flag' },
        { key: 'deedHistory.[n].reoSale', label: 'Deed — REO Sale', controlType: 'flag' },
        { key: 'deedHistory.[n].resale', label: 'Deed — Resale', controlType: 'flag' },
        { key: 'deedHistory.[n].newConstruction', label: 'Deed — New Construction Sale', controlType: 'flag' },
        { key: 'deedHistory.[n].interFamily', label: 'Deed — Inter-Family Sale', controlType: 'flag' },
        { key: 'deedHistory.[n].partialInterestType', label: 'Deed — Partial Interest Type', controlType: 'multiselect-open' },
        { key: 'listing.soldDate', label: 'Sold Date (Listing)', controlType: 'date-range' },
        { key: 'listing.soldPrice', label: 'Sold Price (Listing)', controlType: 'number-range' }
      ]
    },
    {
      label: 'Listing Status',
      fields: [
        { key: 'listing.status', label: 'Listing Status', controlType: 'multiselect-open' },
        { key: 'listing.statusCategory', label: 'Listing Status Category', controlType: 'multiselect', knownValues: [] },
        { key: 'listing.statusSubtype', label: 'Listing Status Subtype', controlType: 'multiselect-open' },
        { key: 'listing.listingCategory', label: 'Listing Category', controlType: 'multiselect', knownValues: [] },
        { key: 'listing.price', label: 'Current List Price', controlType: 'number-range' },
        { key: 'listing.minListPrice', label: 'Min List Price', controlType: 'number-range' },
        { key: 'listing.maxListPrice', label: 'Max List Price', controlType: 'number-range' },
        { key: 'listing.originalListingDate', label: 'Original Listing Date', controlType: 'date-range' },
        { key: 'listing.failedListingDate', label: 'Failed Listing Date', controlType: 'date-range' },
        { key: 'listing.daysOnMarket', label: 'Days on Market', controlType: 'number-range' },
        { key: 'listing.rental', label: 'Available for Rent', controlType: 'flag' },
        { key: 'listing.rentalPrice', label: 'Monthly Rental Price', controlType: 'number-range' },
        { key: 'listing.salePriceIsEstimated', label: 'List Price Is Estimated', controlType: 'flag' },
        { key: 'listing.statusUpdatedAt', label: 'Listing Status Last Updated', controlType: 'date-range' },
        { key: 'listing.maxListPriceDate', label: 'Max List Price Date', controlType: 'date-range' },
        { key: 'listing.minListPriceDate', label: 'Min List Price Date', controlType: 'date-range' },
        { key: 'listing.taxes.[n].amount', label: 'Listing Tax Amount', controlType: 'number-range' },
        { key: 'listing.taxes.[n].year', label: 'Listing Tax Year', controlType: 'number-range' },
        { key: 'listing.appliances', label: 'Appliances', controlType: 'multiselect-contains' },
        { key: 'listing.coolingTypes', label: 'Cooling Types', controlType: 'multiselect-contains' },
        { key: 'listing.heatingFuelTypes', label: 'Heating Fuel Types (Listing)', controlType: 'multiselect-contains' },
        { key: 'listing.heatingTypes', label: 'Heating Types (Listing)', controlType: 'multiselect-contains' },
        { key: 'listing.roofTypes', label: 'Roof Types (Listing)', controlType: 'multiselect-contains' },
        { key: 'listing.patio', label: 'Patio (Listing)', controlType: 'flag' }
      ]
    },
    {
      label: 'Mortgage & Liens',
      fields: [
        { key: 'openLien.totalOpenLienCount', label: 'Open Lien Count', controlType: 'number-range' },
        { key: 'openLien.totalOpenLienBalance', label: 'Total Open Lien Balance', controlType: 'number-range' },
        { key: 'openLien.firstLoanRecordingDate', label: 'First Loan Recording Date', controlType: 'date-range' },
        { key: 'openLien.lastLoanRecordingDate', label: 'Last Loan Recording Date', controlType: 'date-range' },
        { key: 'openLien.mortgages.[n].loanAmount', label: 'Loan Amount', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].loanType', label: 'Loan Type', controlType: 'multiselect', knownValues: [] },
        { key: 'openLien.mortgages.[n].loanTermMonths', label: 'Loan Term (Months)', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].ltv', label: 'Loan-to-Value (LTV)', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].currentEstimatedBalance', label: 'Current Estimated Loan Balance', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].currentEstimatedInterestRate', label: 'Current Estimated Interest Rate', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].estimatedPaymentAmount', label: 'Estimated Monthly Payment', controlType: 'number-range' },
        { key: 'openLien.mortgages.[n].financingType', label: 'Financing Type', controlType: 'multiselect-open' },
        { key: 'openLien.mortgages.[n].lenderName', label: 'Lender Name', controlType: 'text-input' },
        { key: 'openLien.mortgages.[n].lenderType', label: 'Lender Type', controlType: 'multiselect-open' },
        { key: 'openLien.mortgages.[n].dueDate', label: 'Loan Due Date', controlType: 'date-range' },
        { key: 'openLien.mortgages.[n].recordingDate', label: 'Loan Recording Date', controlType: 'date-range' },
        { key: 'openLien.mortgages.[n].adjustableRateRider', label: 'Adjustable Rate Rider', controlType: 'flag' },
        { key: 'openLien.mortgages.[n].adjustableRateIndex', label: 'Adjustable Rate Index', controlType: 'number-range' },
        { key: 'openLien.mortgages[n].firstChangeDateYearConversionRider', label: 'ARM First Change Year', controlType: 'number-range' },
        { key: 'openLien.mortgages[n].firstChangeDateMonthConversionRider', label: 'ARM First Change Month', controlType: 'number-range' },
        { key: 'openLien.mortgages[n].standaloneRefi', label: 'Standalone Refinance', controlType: 'flag' },
        { key: 'openLien.mortgages[n].constructionLoan', label: 'Construction Loan', controlType: 'flag' },
        { key: 'openLien.mortgages[n].cashPurchase', label: 'Cash Purchase', controlType: 'flag' },
        { key: 'openLien.mortgages[n].equityCreditLine', label: 'Equity Credit Line', controlType: 'flag' },
        { key: 'openLien.mortgages[n].purposeOfLoan', label: 'Purpose of Loan', controlType: 'multiselect-open' },
        { key: 'openLien.mortgages[n].transactionType', label: 'Mortgage Transaction Type', controlType: 'multiselect-open' },
        { key: 'mortgageHistory.[n].loanAmount', label: 'Mortgage History — Loan Amount', controlType: 'number-range' },
        { key: 'mortgageHistory.[n].loanType', label: 'Mortgage History — Loan Type', controlType: 'multiselect', knownValues: [] },
        { key: 'mortgageHistory.[n].loanTermMonths', label: 'Mortgage History — Loan Term (Months)', controlType: 'number-range' },
        { key: 'mortgageHistory.[n].interestRate', label: 'Mortgage History — Interest Rate', controlType: 'number-range' },
        { key: 'mortgageHistory.[n].interestRateType', label: 'Mortgage History — Interest Rate Type', controlType: 'multiselect-open' },
        { key: 'mortgageHistory.[n].lenderName', label: 'Mortgage History — Lender Name', controlType: 'text-input' },
        { key: 'mortgageHistory.[n].recordingDate', label: 'Mortgage History — Recording Date', controlType: 'date-range' },
        { key: 'mortgageHistory.[n].saleDate', label: 'Mortgage History — Sale Date', controlType: 'date-range' },
        { key: 'mortgageHistory.[n].dueDate', label: 'Mortgage History — Due Date', controlType: 'date-range' },
        { key: 'mortgageHistory.[n].transactionType', label: 'Mortgage History — Transaction Type', controlType: 'multiselect-open' },
        { key: 'mortgageHistory.[n].documentDate', label: 'Mortgage History — Document Date', controlType: 'date-range' },
        { key: 'sale.lastSale.mortgages.[n].loanAmount', label: 'Last Sale Mortgage — Loan Amount', controlType: 'number-range' },
        { key: 'sale.lastSale.mortgages.[n].loanType', label: 'Last Sale Mortgage — Loan Type', controlType: 'multiselect', knownValues: [] },
        { key: 'sale.lastSale.mortgages.[n].loanTerm', label: 'Last Sale Mortgage — Loan Term', controlType: 'text-input' },
        { key: 'sale.lastSale.mortgages.[n].interestRate', label: 'Last Sale Mortgage — Interest Rate', controlType: 'number-range' },
        { key: 'sale.lastSale.mortgages.[n].financingType', label: 'Last Sale Mortgage — Financing Type', controlType: 'multiselect-open' },
        { key: 'sale.lastSale.mortgages.[n].lenderName', label: 'Last Sale Mortgage — Lender Name', controlType: 'text-input' },
        { key: 'sale.lastSale.mortgages.[n].dueDate', label: 'Last Sale Mortgage — Due Date', controlType: 'date-range' },
        { key: 'sale.lastSale.mortgages.[n].recordingDate', label: 'Last Sale Mortgage — Recording Date', controlType: 'date-range' },
        { key: 'sale.priorSale.mortgages.[n].loanAmount', label: 'Prior Sale Mortgage — Loan Amount', controlType: 'number-range' },
        { key: 'sale.priorSale.mortgages.[n].loanType', label: 'Prior Sale Mortgage — Loan Type', controlType: 'multiselect', knownValues: [] },
        { key: 'sale.priorSale.mortgages.[n].loanTerm', label: 'Prior Sale Mortgage — Loan Term', controlType: 'text-input' },
        { key: 'sale.priorSale.mortgages.[n].interestRate', label: 'Prior Sale Mortgage — Interest Rate', controlType: 'number-range' },
        { key: 'sale.priorSale.mortgages.[n].financingType', label: 'Prior Sale Mortgage — Financing Type', controlType: 'multiselect-open' },
        { key: 'sale.priorSale.mortgages.[n].lenderName', label: 'Prior Sale Mortgage — Lender Name', controlType: 'text-input' },
        { key: 'sale.priorSale.mortgages.[n].dueDate', label: 'Prior Sale Mortgage — Due Date', controlType: 'date-range' },
        { key: 'sale.priorSale.mortgages.[n].recordingDate', label: 'Prior Sale Mortgage — Recording Date', controlType: 'date-range' },
        { key: 'involuntaryLien.liens.[n].lienType', label: 'Involuntary Lien Type', controlType: 'multiselect', knownValues: ["Assessment Lien","Economic Lien","Federal Tax Lien","Mechanic's Lien","Other","State Tax Lien","Support Lien"] },
        { key: 'involuntaryLien.liens.[n].lienAmount', label: 'Involuntary Lien Amount', controlType: 'number-range' },
        { key: 'involuntaryLien.liens.[n].judgementAmount', label: 'Judgement Amount', controlType: 'number-range' },
        { key: 'involuntaryLien.liens.[n].filingDate', label: 'Lien Filing Date', controlType: 'date-range' },
        { key: 'involuntaryLien.liens.[n].recordingDate', label: 'Lien Recording Date', controlType: 'date-range' },
        { key: 'involuntaryLien.liens.[n].taxPeriodEndDate', label: 'Tax Lien Period End Date', controlType: 'date-range' },
        { key: 'involuntaryLien.liens.[n].documentType', label: 'Lien Document Type', controlType: 'multiselect-open' },
        { key: 'involuntaryLien.liens.[n].attorneyCompanyName', label: 'Lien Attorney Company', controlType: 'text-input' },
        { key: 'involuntaryLien.liens.[n].parties.[n].fullName', label: 'Lien Party Name', controlType: 'text-input' },
        { key: 'involuntaryLien.liens.[n].parties.[n].roleType', label: 'Lien Party Role', controlType: 'multiselect-open' }
      ]
    },
    {
      label: 'Distressed & Pre-Foreclosure',
      fields: [
        { key: 'foreclosure.status', label: 'Foreclosure Status', controlType: 'multiselect', knownValues: ['Cancel Due to length of Time and Auction Date','Notice of Default and Lis Pendens','Notice of Sale','Notice of Trustee Sale and Final Judgement','REO Release','Rescission Recording','Rescission Release','Transfer Release'] },
        { key: 'foreclosure.flag', label: 'Foreclosure Flag', controlType: 'single-select', knownValues: [] },
        { key: 'foreclosure.defaultDate', label: 'Default Date', controlType: 'date-range' },
        { key: 'foreclosure.recordingDate', label: 'Foreclosure Recording Date', controlType: 'date-range' },
        { key: 'foreclosure.filingDate', label: 'Foreclosure Filing Date', controlType: 'date-range' },
        { key: 'foreclosure.releaseDate', label: 'Foreclosure Release Date', controlType: 'date-range' },
        { key: 'foreclosure.auctionDate', label: 'Auction Date', controlType: 'date-range' },
        { key: 'foreclosure.auctionCity', label: 'Auction City', controlType: 'multiselect-open' },
        { key: 'foreclosure.auctionMinimumBidAmount', label: 'Auction Minimum Bid', controlType: 'number-range' },
        { key: 'foreclosure.originalLoanAmount', label: 'Original Loan Amount', controlType: 'number-range' },
        { key: 'foreclosure.unpaidBalance', label: 'Unpaid Balance', controlType: 'number-range' },
        { key: 'foreclosure.pastDueAmount', label: 'Past Due Amount', controlType: 'number-range' },
        { key: 'foreclosure.dueDate', label: 'Payment Due Date', controlType: 'date-range' },
        { key: 'foreclosure.currentLenderName', label: 'Current Lender (Foreclosure)', controlType: 'text-input' },
        { key: 'foreclosure.borrowerName', label: 'Borrower Name', controlType: 'text-input' },
        { key: 'foreclosure.documentType', label: 'Foreclosure Document Type', controlType: 'multiselect-open' }
      ]
    },
    {
      label: 'Permits',
      fields: [
        { key: 'permit.permitCount', label: 'Total Permit Count', controlType: 'number-range' },
        { key: 'permit.totalJobValue', label: 'Total Permit Job Value', controlType: 'number-range' },
        { key: 'permit.latestDate', label: 'Most Recent Permit Date', controlType: 'date-range' },
        { key: 'permit.earliestDate', label: 'Oldest Permit Date', controlType: 'date-range' },
        { key: 'permit.tags.addition', label: 'Has Addition Permit', controlType: 'flag' },
        { key: 'permit.tags.adu', label: 'Has ADU Permit', controlType: 'flag' },
        { key: 'permit.tags.bathroom', label: 'Has Bathroom Permit', controlType: 'flag' },
        { key: 'permit.tags.battery', label: 'Has Battery Permit', controlType: 'flag' },
        { key: 'permit.tags.demolition', label: 'Has Demolition Permit', controlType: 'flag' },
        { key: 'permit.tags.electricMeter', label: 'Has Electric Meter Permit', controlType: 'flag' },
        { key: 'permit.tags.electrical', label: 'Has Electrical Permit', controlType: 'flag' },
        { key: 'permit.tags.evCharger', label: 'Has EV Charger Permit', controlType: 'flag' },
        { key: 'permit.tags.fireSprinkler', label: 'Has Fire Sprinkler Permit', controlType: 'flag' },
        { key: 'permit.tags.gas', label: 'Has Gas Permit', controlType: 'flag' },
        { key: 'permit.tags.generator', label: 'Has Generator Permit', controlType: 'flag' },
        { key: 'permit.tags.grading', label: 'Has Grading Permit', controlType: 'flag' },
        { key: 'permit.tags.heatPump', label: 'Has Heat Pump Permit', controlType: 'flag' },
        { key: 'permit.tags.hvac', label: 'Has HVAC Permit', controlType: 'flag' },
        { key: 'permit.tags.inspectionPassed', label: 'Has Passed Inspection', controlType: 'flag' },
        { key: 'permit.tags.kitchen', label: 'Has Kitchen Permit', controlType: 'flag' },
        { key: 'permit.tags.newConstruction', label: 'Has New Construction Permit', controlType: 'flag' },
        { key: 'permit.tags.plumbing', label: 'Has Plumbing Permit', controlType: 'flag' },
        { key: 'permit.tags.poolAndHotTub', label: 'Has Pool / Hot Tub Permit', controlType: 'flag' },
        { key: 'permit.tags.remodel', label: 'Has Remodel Permit', controlType: 'flag' },
        { key: 'permit.tags.roofing', label: 'Has Roofing Permit', controlType: 'flag' },
        { key: 'permit.tags.solar', label: 'Has Solar Permit', controlType: 'flag' },
        { key: 'permit.tags.waterHeater', label: 'Has Water Heater Permit', controlType: 'flag' },
        { key: 'permit.tags.windowDoor', label: 'Has Window / Door Permit', controlType: 'flag' }
      ]
    },
    {
      label: 'Demographics',
      fields: [
        { key: 'demographics.age', label: 'Owner Age', controlType: 'number-range' },
        { key: 'demographics.gender', label: 'Owner Gender', controlType: 'single-select', knownValues: ['Female','Male'] },
        { key: 'demographics.maritalStatus', label: 'Marital Status', controlType: 'multiselect-open' },
        { key: 'demographics.hasChildren', label: 'Has Children', controlType: 'flag' },
        { key: 'demographics.childCount', label: 'Number of Children', controlType: 'number-range' },
        { key: 'demographics.householdSize', label: 'Household Size', controlType: 'number-range' },
        { key: 'demographics.income', label: 'Household Income', controlType: 'number-range' },
        { key: 'demographics.discretionaryIncome', label: 'Discretionary Income', controlType: 'number-range' },
        { key: 'demographics.netWorth', label: 'Net Worth', controlType: 'number-range' },
        { key: 'demographics.millionaire', label: 'Millionaire', controlType: 'flag' },
        { key: 'demographics.homeownerRenter', label: 'Homeowner or Renter', controlType: 'single-select', knownValues: ['Home Owner','Renter'] },
        { key: 'demographics.individualOccupation', label: 'Occupation', controlType: 'multiselect-open' },
        { key: 'demographics.individualEducation', label: 'Education Level', controlType: 'multiselect-open' },
        { key: 'demographics.businessOwner', label: 'Business Owner Type', controlType: 'multiselect', knownValues: ['Accountant','Builder','Contractor','Dealer/Retailer/Storekeeper','Distributor/Wholesaler','Funeral Director','Maker/Manufacturer','Owner','Partner','Self-Employed'] },
        { key: 'demographics.recentlyMoved', label: 'Recently Moved', controlType: 'flag' },
        { key: 'demographics.recentlyMovedMonth', label: 'Recently Moved — Month', controlType: 'number-range' },
        { key: 'demographics.recentlyMovedYear', label: 'Recently Moved — Year', controlType: 'number-range' },
        { key: 'demographics.recentlyDivorced', label: 'Recently Divorced', controlType: 'flag' },
        { key: 'demographics.singleParent', label: 'Single Parent', controlType: 'flag' },
        { key: 'demographics.petOwner', label: 'Pet Owner', controlType: 'flag' },
        { key: 'demographics.religious', label: 'Religious', controlType: 'flag' },
        { key: 'demographics.religiousAffiliation', label: 'Religious Affiliation', controlType: 'multiselect', knownValues: ['All','Buddhist','Catholic','Eastern Orthodox','Ethiopian Orthodox','Greek Orthodox','Hindu','Islamic','Jewish','Lutheran','Mormon','Other','Protestant','Shinto','Sikh'] },
        { key: 'demographics.smoker', label: 'Smoker', controlType: 'flag' }
      ]
    },
    {
      label: 'Sale Propensity',
      fields: [
        { key: 'intel.salePropensityCategory', label: 'Sale Propensity', controlType: 'multiselect', knownValues: ['High','Medium','Low'] },
        { key: 'intel.salePropensityStatus', label: 'Sale Propensity Availability', controlType: 'single-select', knownValues: [] },
        { key: 'intel.salePropensity', label: 'Sale Propensity Score', controlType: 'number-range' }
      ]
    },
    {
      label: 'Contact Quality',
      fields: [
        { key: 'owner.phoneNumbers.[n].dnc', label: 'Phone — On DNC Registry', controlType: 'flag' },
        { key: 'owner.dnc.tcpa', label: 'On TCPA Litigators List', controlType: 'flag' },
        { key: 'owner.litigator', label: 'Known TCPA Litigator', controlType: 'flag' },
        { key: 'owner.phoneNumbers.[n].reachable', label: 'Phone — Reachable', controlType: 'flag' },
        { key: 'owner.phoneNumbers.[n].tested', label: 'Phone — Connection Tested', controlType: 'flag' },
        { key: 'owner.phoneNumbers.[n].type', label: 'Phone Type', controlType: 'single-select', knownValues: ['Land Line','Mobile'] },
        { key: 'owner.phoneNumbers.[n].score', label: 'Phone Score', controlType: 'number-range' },
        { key: 'owner.phoneNumbers.[n].carrier', label: 'Phone Carrier', controlType: 'multiselect-open' },
        { key: 'owner.phoneNumbers.[n].firstReportedDate', label: 'Phone First Reported Date', controlType: 'date-range' },
        { key: 'owner.phoneNumbers.[n].lastReportedDate', label: 'Phone Last Reported Date', controlType: 'date-range' },
        { key: 'owner.enrichedEmails.[n].tested', label: 'Email — Deliverability Tested', controlType: 'flag' }
      ]
    }
  ];

  /* flat map for lookup */
  var FIELD_MAP = {};
  FIELD_GROUPS.forEach(function(g) {
    g.fields.forEach(function(f) { FIELD_MAP[f.key] = f; });
  });

  /* =============================================
     STATE
  ============================================= */
  var filters = [];
  var junctions = [];
  var openDropdownId = null; /* tracks which dropdown is open: 'picker-<id>' | 'chip-<id>' */

  function uid() {
    return 'f' + Math.random().toString(36).slice(2, 9);
  }

  function defaultOperator(controlType) {
    switch (controlType) {
      case 'text-input': return 'contains';
      case 'number-range': return 'is-between';
      case 'date-range': return 'is-between';
      case 'flag': return null;
      case 'single-select': return 'is';
      case 'multiselect': return 'is-any-of';
      case 'multiselect-open': return 'is-any-of';
      case 'multiselect-contains': return 'contains';
      case 'tags': return 'is-any-of';
      default: return null;
    }
  }

  function defaultValue(controlType) {
    switch (controlType) {
      case 'text-input': return '';
      case 'number-range': return { min: '', max: '' };
      case 'date-range': return { min: '', max: '' };
      case 'flag': return null;
      case 'single-select': return '';
      case 'multiselect': return [];
      case 'multiselect-open': return [];
      case 'multiselect-contains': return [];
      case 'tags': return [];
      default: return null;
    }
  }

  function operatorsFor(controlType) {
    switch (controlType) {
      case 'text-input': return [
        { value: 'contains', label: 'contains' },
        { value: 'is-exactly', label: 'is exactly' }
      ];
      case 'number-range': return [
        { value: 'is-between', label: 'is between' },
        { value: 'is-greater-than', label: 'is greater than' },
        { value: 'is-less-than', label: 'is less than' },
        { value: 'is-exactly', label: 'is exactly' }
      ];
      case 'date-range': return [
        { value: 'is-between', label: 'is between' },
        { value: 'is-before', label: 'is before' },
        { value: 'is-after', label: 'is after' },
        { value: 'is-exactly', label: 'is exactly' }
      ];
      case 'single-select': return [
        { value: 'is', label: 'is' },
        { value: 'is-not', label: 'is not' }
      ];
      case 'multiselect': return [
        { value: 'is-any-of', label: 'is any of' },
        { value: 'is-none-of', label: 'is none of' }
      ];
      case 'multiselect-open': return [
        { value: 'is-any-of', label: 'is any of' },
        { value: 'is-none-of', label: 'is none of' }
      ];
      case 'multiselect-contains': return [
        { value: 'contains', label: 'contains' }
      ];
      case 'tags': return [
        { value: 'is-any-of', label: 'is any of' },
        { value: 'is-all-of', label: 'is all of' }
      ];
      default: return [];
    }
  }

  function isSingleValue(op) {
    return op === 'is-greater-than' || op === 'is-less-than' || op === 'is-exactly'
      || op === 'is-before' || op === 'is-after';
  }

  /* =============================================
     TYPE INDICATOR HELPERS
  ============================================= */
  function typeIndicator(controlType) {
    switch (controlType) {
      case 'text-input': return '<span class="fb-type-badge fb-type-text">T</span>';
      case 'number-range': return '<span class="fb-type-badge fb-type-number">#</span>';
      case 'date-range': return '<span class="fb-type-badge fb-type-date"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M4 1v2M8 1v2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M1 5h10" stroke="currentColor" stroke-width="1.2"/></svg></span>';
      case 'flag': return '<span class="fb-type-badge fb-type-flag"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 1v10M2 2l7 2-7 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      case 'single-select': return '<span class="fb-type-badge fb-type-select">\u2261</span>';
      case 'multiselect':
      case 'multiselect-open':
      case 'multiselect-contains': return '<span class="fb-type-badge fb-type-multi">\u2611</span>';
      case 'tags': return '<span class="fb-type-badge fb-type-tags">\uD83C\uDFF7</span>';
      default: return '';
    }
  }

  /* =============================================
     RENDER ENGINE
  ============================================= */
  var mount = null;

  function render() {
    if (!mount) return;
    mount.innerHTML = buildHTML();
    attachEvents();
    logState();
  }

  function buildHTML() {
    var html = '<div class="fb">';

    /* toolbar */
    html += '<div class="fb__toolbar">';
    if (filters.length > 0) {
      html += '<button class="btn btn-ghost btn-sm fb__clear-all" onclick="window.clearAllFilters()">Clear all</button>';
    }
    html += '</div>';

    /* list */
    html += '<div class="fb__list">';

    if (filters.length === 0) {
      html += '<div class="fb__empty">No filters added yet. Click + Add filter to start.</div>';
    } else {
      filters.forEach(function(f, i) {
        /* junction before row (except first) */
        if (i > 0) {
          var j = junctions[i - 1] || 'AND';
          html += '<div class="fb__junction" data-index="' + (i - 1) + '">'
            + '<button class="fb__junction-btn fb__junction-btn--' + j.toLowerCase() + '" data-junction-index="' + (i - 1) + '">' + j + '</button>'
            + '</div>';
        }
        html += buildRowHTML(f, i);
      });
    }

    html += '</div>'; /* fb__list */

    /* add filter button */
    html += '<div class="fb__footer">'
      + '<button class="btn btn-outline btn-sm fb__add-btn" onclick="window.addFilter()">'
      + '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>'
      + 'Add filter'
      + '</button>'
      + '</div>';

    html += '</div>'; /* fb */
    return html;
  }

  function buildRowHTML(f, idx) {
    var html = '<div class="fb__row" data-id="' + f.id + '" data-idx="' + idx + '">';

    /* === FIELD PICKER === */
    html += '<div class="fb__cell fb__cell--field">';
    html += '<div class="fb__picker-wrap" data-picker-id="' + f.id + '">';
    html += '<button class="fb__field-btn" data-action="open-picker" data-id="' + f.id + '">';
    if (f.field) {
      html += typeIndicator(f.controlType) + '<span class="fb__field-label">' + esc(f.label) + '</span>';
    } else {
      html += '<span class="fb__field-placeholder">Select field\u2026</span>';
    }
    html += '<svg class="fb__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    html += '</button>';

    /* field picker dropdown */
    var pickerOpen = openDropdownId === 'picker-' + f.id;
    html += '<div class="fb__picker-dropdown" id="picker-' + f.id + '" style="display:' + (pickerOpen ? 'block' : 'none') + '">';
    html += '<div class="fb__picker-search-wrap"><input class="fb__picker-search input" type="text" placeholder="Search fields\u2026" data-picker-search="' + f.id + '" autocomplete="off" /></div>';
    html += '<div class="fb__picker-groups" id="picker-groups-' + f.id + '">';
    html += buildPickerGroupsHTML(f.field);
    html += '</div>';
    html += '</div>'; /* picker-dropdown */

    html += '</div>'; /* picker-wrap */
    html += '</div>'; /* cell--field */

    /* Only render operator + value if a field is selected */
    if (f.field) {
      /* === OPERATOR === */
      if (f.controlType !== 'flag' && f.controlType !== 'multiselect-contains') {
        var ops = operatorsFor(f.controlType);
        html += '<div class="fb__cell fb__cell--operator">';
        html += '<select class="fb__operator input" data-action="change-operator" data-id="' + f.id + '">';
        ops.forEach(function(op) {
          html += '<option value="' + op.value + '"' + (f.operator === op.value ? ' selected' : '') + '>' + op.label + '</option>';
        });
        html += '</select>';
        html += '</div>';
      } else if (f.controlType === 'multiselect-contains') {
        html += '<div class="fb__cell fb__cell--operator">';
        html += '<span class="fb__operator-fixed">contains</span>';
        html += '</div>';
      }

      /* === VALUE === */
      if (f.controlType !== 'flag') {
        html += '<div class="fb__cell fb__cell--value">';
        html += buildValueHTML(f);
        html += '</div>';
      } else {
        /* flag: show Active badge */
        html += '<div class="fb__cell fb__cell--flag-active">';
        html += '<span class="badge badge--ready fb__flag-badge">Active</span>';
        html += '</div>';
      }
    }

    /* === DELETE === */
    html += '<div class="fb__cell fb__cell--delete">';
    html += '<button class="fb__delete-btn" data-action="delete-filter" data-id="' + f.id + '" title="Remove filter" aria-label="Remove filter">';
    html += '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 3.5h10M5.5 3.5V2.5h3v1M5.5 6v4M8.5 6v4M3 3.5l.7 7.5h6.6l.7-7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    html += '</button>';
    html += '</div>';

    html += '</div>'; /* fb__row */
    return html;
  }

  function buildPickerGroupsHTML(selectedKey) {
    var html = '';
    FIELD_GROUPS.forEach(function(g) {
      html += '<div class="fb__picker-group" data-group="' + esc(g.label) + '">';
      html += '<div class="fb__picker-group-label">' + esc(g.label) + '</div>';
      g.fields.forEach(function(f) {
        var sel = (f.key === selectedKey) ? ' fb__picker-option--selected' : '';
        html += '<button class="fb__picker-option' + sel + '" data-action="select-field" data-key="' + esc(f.key) + '">'
          + typeIndicator(f.controlType)
          + '<span>' + esc(f.label) + '</span>'
          + '</button>';
      });
      html += '</div>';
    });
    return html;
  }

  function buildValueHTML(f) {
    var op = f.operator;
    var ct = f.controlType;

    if (ct === 'text-input') {
      return '<input class="input fb__text-input" type="text" data-action="change-text" data-id="' + f.id + '" value="' + esc(f.value || '') + '" placeholder="Enter value\u2026" autocomplete="off" />';
    }

    if (ct === 'number-range') {
      if (op === 'is-between') {
        return '<div class="fb__range-pair">'
          + '<input class="input fb__range-input" type="number" data-action="change-range-min" data-id="' + f.id + '" value="' + esc(f.value.min) + '" placeholder="Min" />'
          + '<span class="fb__range-sep">–</span>'
          + '<input class="input fb__range-input" type="number" data-action="change-range-max" data-id="' + f.id + '" value="' + esc(f.value.max) + '" placeholder="Max" />'
          + '</div>';
      } else {
        return '<input class="input fb__range-input" type="number" data-action="change-range-single" data-id="' + f.id + '" value="' + esc(f.value.min !== undefined ? f.value.min : (f.value || '')) + '" placeholder="Value" />';
      }
    }

    if (ct === 'date-range') {
      if (op === 'is-between') {
        return '<div class="fb__range-pair">'
          + '<input class="input fb__date-input" type="date" data-action="change-date-min" data-id="' + f.id + '" value="' + esc(f.value.min) + '" />'
          + '<span class="fb__range-sep">–</span>'
          + '<input class="input fb__date-input" type="date" data-action="change-date-max" data-id="' + f.id + '" value="' + esc(f.value.max) + '" />'
          + '</div>';
      } else {
        return '<input class="input fb__date-input" type="date" data-action="change-date-single" data-id="' + f.id + '" value="' + esc(f.value.min !== undefined ? f.value.min : (f.value || '')) + '" />';
      }
    }

    if (ct === 'single-select') {
      var opts = (f.knownValues && f.knownValues.length)
        ? f.knownValues.map(function(v) {
            return '<option value="' + esc(v) + '"' + (f.value === v ? ' selected' : '') + '>' + esc(v) + '</option>';
          }).join('')
        : '<option value="" disabled>No options available</option>';
      return '<select class="input fb__select" data-action="change-select" data-id="' + f.id + '">'
        + '<option value="">Select\u2026</option>'
        + opts
        + '</select>';
    }

    /* chip-based types */
    if (ct === 'multiselect' || ct === 'multiselect-open' || ct === 'multiselect-contains' || ct === 'tags') {
      var selectedVals = Array.isArray(f.value) ? f.value : [];
      var chipOpen = openDropdownId === 'chip-' + f.id;
      var html = '<div class="fb__chip-wrap" data-chip-wrap="' + f.id + '" style="position:relative;">';

      /* chips area */
      html += '<div class="fb__chips-area" data-action="toggle-chip-dropdown" data-id="' + f.id + '">';
      selectedVals.forEach(function(v) {
        html += '<span class="fb__chip">' + esc(v)
          + '<button class="fb__chip-remove" data-action="remove-chip" data-id="' + f.id + '" data-value="' + esc(v) + '" aria-label="Remove ' + esc(v) + '">'
          + '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
          + '</button></span>';
      });
      html += '<span class="fb__chips-placeholder"' + (selectedVals.length ? ' style="display:none"' : '') + '>Click to select\u2026</span>';
      html += '<svg class="fb__chips-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      html += '</div>';

      /* chip dropdown */
      html += '<div class="fb__chip-dropdown" id="chip-' + f.id + '" style="display:' + (chipOpen ? 'block' : 'none') + '">';

      var needsSearch = ct === 'multiselect-open' || ct === 'multiselect-contains' || ct === 'tags';
      if (needsSearch) {
        html += '<div class="fb__chip-search-wrap"><input class="fb__chip-search input" type="text" placeholder="Search\u2026" data-chip-search="' + f.id + '" autocomplete="off" /></div>';
      }

      html += '<div class="fb__chip-options" id="chip-options-' + f.id + '">';
      var knownVals = f.knownValues || [];
      if (knownVals.length === 0 && ct !== 'multiselect-open' && ct !== 'multiselect-contains') {
        html += '<div class="fb__chip-empty">No options available</div>';
      } else {
        knownVals.forEach(function(v) {
          var checked = selectedVals.indexOf(v) !== -1;
          html += '<button class="fb__chip-option' + (checked ? ' fb__chip-option--checked' : '') + '" data-action="toggle-chip" data-id="' + f.id + '" data-value="' + esc(v) + '">'
            + (checked ? '<svg class="fb__check-icon" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>' : '<span class="fb__check-icon fb__check-placeholder"></span>')
            + esc(v)
            + '</button>';
        });
        if (ct === 'multiselect-open' || ct === 'multiselect-contains') {
          html += '<div class="fb__chip-free-entry" id="chip-free-' + f.id + '" style="display:none;">'
            + '<span class="fb__chip-free-hint">Press Enter to add</span>'
            + '</div>';
        }
      }
      html += '</div>'; /* chip-options */
      html += '</div>'; /* chip-dropdown */

      html += '</div>'; /* chip-wrap */
      return html;
    }

    return '';
  }

  /* =============================================
     EVENT DELEGATION
  ============================================= */
  function attachEvents() {
    if (!mount) return;

    /* === FIELD PICKER TOGGLE === */
    mount.addEventListener('click', function(e) {
      /* open picker */
      var pickerBtn = e.target.closest('[data-action="open-picker"]');
      if (pickerBtn) {
        e.stopPropagation();
        var id = pickerBtn.dataset.id;
        var targetId = 'picker-' + id;
        if (openDropdownId === targetId) {
          openDropdownId = null;
        } else {
          openDropdownId = targetId;
        }
        /* show/hide all dropdowns in DOM immediately (no full re-render) */
        refreshDropdownVisibility();
        /* focus search */
        var srch = document.querySelector('[data-picker-search="' + id + '"]');
        if (srch) { srch.focus(); }
        return;
      }

      /* select field from picker */
      var fieldOpt = e.target.closest('[data-action="select-field"]');
      if (fieldOpt) {
        e.stopPropagation();
        var key = fieldOpt.dataset.key;
        var fieldDef = FIELD_MAP[key];
        if (!fieldDef) return;
        /* find which filter this belongs to */
        var row = fieldOpt.closest('.fb__row');
        if (!row) return;
        var filterId = row.dataset.id;
        var filter = getFilterById(filterId);
        if (!filter) return;
        /* update filter */
        filter.field = fieldDef.key;
        filter.label = fieldDef.label;
        filter.controlType = fieldDef.controlType;
        filter.knownValues = fieldDef.knownValues || [];
        filter.operator = defaultOperator(fieldDef.controlType);
        filter.value = defaultValue(fieldDef.controlType);
        openDropdownId = null;
        render();
        return;
      }

      /* toggle chip dropdown */
      var chipsArea = e.target.closest('[data-action="toggle-chip-dropdown"]');
      if (chipsArea) {
        /* don't interfere if clicking the chip remove button */
        if (e.target.closest('[data-action="remove-chip"]')) return;
        e.stopPropagation();
        var id = chipsArea.dataset.id;
        var targetId = 'chip-' + id;
        if (openDropdownId === targetId) {
          openDropdownId = null;
        } else {
          openDropdownId = targetId;
        }
        refreshDropdownVisibility();
        var srch = document.querySelector('[data-chip-search="' + id + '"]');
        if (srch) { srch.focus(); }
        return;
      }

      /* toggle chip value */
      var chipOpt = e.target.closest('[data-action="toggle-chip"]');
      if (chipOpt) {
        e.stopPropagation();
        var id = chipOpt.dataset.id;
        var val = chipOpt.dataset.value;
        var filter = getFilterById(id);
        if (!filter) return;
        var arr = Array.isArray(filter.value) ? filter.value : [];
        var idx = arr.indexOf(val);
        if (idx === -1) { arr = arr.concat([val]); }
        else { arr = arr.filter(function(v) { return v !== val; }); }
        filter.value = arr;
        /* partial update: refresh chips area + dropdown options without full re-render */
        refreshChipUI(filter);
        logState();
        return;
      }

      /* remove chip */
      var chipRemove = e.target.closest('[data-action="remove-chip"]');
      if (chipRemove) {
        e.stopPropagation();
        var id = chipRemove.dataset.id;
        var val = chipRemove.dataset.value;
        var filter = getFilterById(id);
        if (!filter) return;
        filter.value = (Array.isArray(filter.value) ? filter.value : []).filter(function(v) { return v !== val; });
        refreshChipUI(filter);
        logState();
        return;
      }

      /* delete filter */
      var delBtn = e.target.closest('[data-action="delete-filter"]');
      if (delBtn) {
        var id = delBtn.dataset.id;
        var idx = filters.findIndex(function(f) { return f.id === id; });
        if (idx !== -1) {
          filters.splice(idx, 1);
          if (junctions.length >= idx && idx > 0) {
            junctions.splice(idx - 1, 1);
          } else if (junctions.length > 0 && idx === 0) {
            junctions.splice(0, 1);
          }
        }
        openDropdownId = null;
        render();
        return;
      }

      /* junction toggle */
      var junctionBtn = e.target.closest('[data-junction-index]');
      if (junctionBtn) {
        var jIdx = parseInt(junctionBtn.dataset.junctionIndex, 10);
        junctions[jIdx] = junctions[jIdx] === 'OR' ? 'AND' : 'OR';
        /* partial update junction button text */
        junctionBtn.textContent = junctions[jIdx];
        junctionBtn.className = 'fb__junction-btn fb__junction-btn--' + junctions[jIdx].toLowerCase();
        logState();
        return;
      }

    }, true /* capture to get events before stopPropagation elsewhere */);

    /* === OPERATOR CHANGE === */
    mount.addEventListener('change', function(e) {
      var opSel = e.target.closest('[data-action="change-operator"]');
      if (opSel) {
        var id = opSel.dataset.id;
        var filter = getFilterById(id);
        if (!filter) return;
        var oldOp = filter.operator;
        filter.operator = opSel.value;
        /* if switching between between <-> single, reset value shape */
        if (filter.controlType === 'number-range' || filter.controlType === 'date-range') {
          var wasRange = (oldOp === 'is-between');
          var nowRange = (filter.operator === 'is-between');
          if (wasRange !== nowRange) {
            filter.value = defaultValue(filter.controlType);
          }
        }
        render();
        return;
      }

      var selInput = e.target.closest('[data-action="change-select"]');
      if (selInput) {
        var id = selInput.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value = selInput.value; logState(); }
        return;
      }
    });

    /* === TEXT INPUT CHANGES (use input event to preserve focus) === */
    mount.addEventListener('input', function(e) {
      /* text-input */
      var textIn = e.target.closest('[data-action="change-text"]');
      if (textIn) {
        var id = textIn.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value = textIn.value; logState(); }
        return;
      }
      /* range min */
      var rMin = e.target.closest('[data-action="change-range-min"]');
      if (rMin) {
        var id = rMin.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value.min = rMin.value; logState(); }
        return;
      }
      /* range max */
      var rMax = e.target.closest('[data-action="change-range-max"]');
      if (rMax) {
        var id = rMax.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value.max = rMax.value; logState(); }
        return;
      }
      /* single range/date */
      var rSingle = e.target.closest('[data-action="change-range-single"]');
      if (rSingle) {
        var id = rSingle.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value = { min: rSingle.value, max: '' }; logState(); }
        return;
      }
      var dMin = e.target.closest('[data-action="change-date-min"]');
      if (dMin) {
        var id = dMin.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value.min = dMin.value; logState(); }
        return;
      }
      var dMax = e.target.closest('[data-action="change-date-max"]');
      if (dMax) {
        var id = dMax.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value.max = dMax.value; logState(); }
        return;
      }
      var dSingle = e.target.closest('[data-action="change-date-single"]');
      if (dSingle) {
        var id = dSingle.dataset.id;
        var filter = getFilterById(id);
        if (filter) { filter.value = { min: dSingle.value, max: '' }; logState(); }
        return;
      }

      /* picker search */
      var pickerSearch = e.target.closest('[data-picker-search]');
      if (pickerSearch) {
        var filterId = pickerSearch.dataset.pickerSearch;
        var query = pickerSearch.value.toLowerCase();
        var groupsContainer = document.getElementById('picker-groups-' + filterId);
        if (groupsContainer) {
          filterPickerGroups(groupsContainer, query);
        }
        return;
      }

      /* chip search */
      var chipSearch = e.target.closest('[data-chip-search]');
      if (chipSearch) {
        var filterId = chipSearch.dataset.chipSearch;
        var query = chipSearch.value.toLowerCase();
        var filter = getFilterById(filterId);
        filterChipOptions(filterId, query, filter);
        return;
      }
    });

    /* chip search: handle Enter for free-text entry */
    mount.addEventListener('keydown', function(e) {
      if (e.key !== 'Enter') return;
      var chipSearch = e.target.closest('[data-chip-search]');
      if (!chipSearch) return;
      var filterId = chipSearch.dataset.chipSearch;
      var filter = getFilterById(filterId);
      if (!filter) return;
      if (filter.controlType === 'multiselect-open' || filter.controlType === 'multiselect-contains') {
        var val = chipSearch.value.trim();
        if (!val) return;
        var arr = Array.isArray(filter.value) ? filter.value : [];
        if (arr.indexOf(val) === -1) {
          filter.value = arr.concat([val]);
          refreshChipUI(filter);
          logState();
        }
        chipSearch.value = '';
        var freeEntry = document.getElementById('chip-free-' + filterId);
        if (freeEntry) freeEntry.style.display = 'none';
      }
    });
  }

  /* =============================================
     PARTIAL DOM UPDATES (avoid re-render for chips)
  ============================================= */
  function refreshChipUI(filter) {
    /* rebuild just the chips area and options list */
    var chipsArea = mount.querySelector('[data-action="toggle-chip-dropdown"][data-id="' + filter.id + '"]');
    if (chipsArea) {
      var selectedVals = Array.isArray(filter.value) ? filter.value : [];
      var chipsHTML = '';
      selectedVals.forEach(function(v) {
        chipsHTML += '<span class="fb__chip">' + esc(v)
          + '<button class="fb__chip-remove" data-action="remove-chip" data-id="' + filter.id + '" data-value="' + esc(v) + '" aria-label="Remove ' + esc(v) + '">'
          + '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
          + '</button></span>';
      });
      chipsHTML += '<span class="fb__chips-placeholder"' + (selectedVals.length ? ' style="display:none"' : '') + '>Click to select\u2026</span>';
      chipsHTML += '<svg class="fb__chips-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      chipsArea.innerHTML = chipsHTML;
    }

    /* update option checkmarks */
    var optionsContainer = document.getElementById('chip-options-' + filter.id);
    if (optionsContainer) {
      var selectedVals = Array.isArray(filter.value) ? filter.value : [];
      optionsContainer.querySelectorAll('[data-action="toggle-chip"]').forEach(function(btn) {
        var v = btn.dataset.value;
        var checked = selectedVals.indexOf(v) !== -1;
        btn.classList.toggle('fb__chip-option--checked', checked);
        var iconSlot = btn.querySelector('.fb__check-icon, .fb__check-placeholder');
        if (iconSlot) {
          if (checked) {
            iconSlot.outerHTML = '<svg class="fb__check-icon" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          } else {
            iconSlot.outerHTML = '<span class="fb__check-icon fb__check-placeholder"></span>';
          }
        }
      });
    }
  }

  function refreshDropdownVisibility() {
    /* show/hide all picker and chip dropdowns */
    mount.querySelectorAll('.fb__picker-dropdown, .fb__chip-dropdown').forEach(function(el) {
      el.style.display = (el.id === openDropdownId) ? 'block' : 'none';
    });
  }

  function filterPickerGroups(container, query) {
    container.querySelectorAll('.fb__picker-group').forEach(function(group) {
      var anyVisible = false;
      group.querySelectorAll('.fb__picker-option').forEach(function(opt) {
        var label = opt.querySelector('span');
        var text = label ? label.textContent.toLowerCase() : '';
        var key = opt.dataset.key ? opt.dataset.key.toLowerCase() : '';
        var match = !query || text.indexOf(query) !== -1 || key.indexOf(query) !== -1;
        opt.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });
      group.style.display = anyVisible ? '' : 'none';
    });
  }

  function filterChipOptions(filterId, query, filter) {
    var container = document.getElementById('chip-options-' + filterId);
    if (!container) return;
    var freeEntry = document.getElementById('chip-free-' + filterId);
    var anyVisible = false;
    container.querySelectorAll('[data-action="toggle-chip"]').forEach(function(btn) {
      var text = (btn.dataset.value || '').toLowerCase();
      var match = !query || text.indexOf(query) !== -1;
      btn.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    /* show free-entry hint if no match and open type */
    if (freeEntry) {
      var isOpenType = filter && (filter.controlType === 'multiselect-open' || filter.controlType === 'multiselect-contains');
      freeEntry.style.display = (isOpenType && query && !anyVisible) ? 'block' : 'none';
    }
  }

  /* =============================================
     DOCUMENT CLICK HANDLER — close dropdowns
  ============================================= */
  document.addEventListener('click', function(e) {
    if (!mount) return;
    if (!openDropdownId) return;
    /* if click is inside a picker-wrap or chip-wrap, let delegated handlers manage it */
    if (e.target.closest('.fb__picker-wrap') || e.target.closest('.fb__chip-wrap')) return;
    openDropdownId = null;
    refreshDropdownVisibility();
  });

  /* =============================================
     HELPERS
  ============================================= */
  function getFilterById(id) {
    return filters.find(function(f) { return f.id === id; });
  }

  function esc(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function logState() {
    console.log('[FilterBuilder]', JSON.stringify({ filters: filters, junctions: junctions }, null, 2));
  }

  /* =============================================
     PUBLIC API
  ============================================= */
  window.addFilter = function() {
    var f = {
      id: uid(),
      field: null,
      label: null,
      controlType: null,
      operator: null,
      value: null,
      knownValues: []
    };
    filters.push(f);
    if (filters.length > 1) {
      junctions.push('AND');
    }
    openDropdownId = 'picker-' + f.id;
    render();
    /* focus the search in the newly opened picker */
    var srch = document.querySelector('[data-picker-search="' + f.id + '"]');
    if (srch) { srch.focus(); }
  };

  window.clearAllFilters = function() {
    filters = [];
    junctions = [];
    openDropdownId = null;
    render();
  };

  window.getFilterState = function() {
    return { filters: filters, junctions: junctions };
  };

  /* =============================================
     INIT
  ============================================= */
  function init() {
    mount = document.getElementById('filterBuilderMount');
    if (!mount) {
      console.warn('[FilterBuilder] mount point #filterBuilderMount not found');
      return;
    }
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

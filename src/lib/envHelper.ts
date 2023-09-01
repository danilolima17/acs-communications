export const getResourceConnectionString = (): string => {
    const resourceConnectionString = process.env.NEXT_PUBLIC_RESOURCE_CONNECTION_STRING;
  
    if (!resourceConnectionString) {
      throw new Error('No ACS connection string provided');
    }
  
    return resourceConnectionString;
  };
  
  export const getEndpoint = (): string => {
    const endpointUrl = process.env.NEXT_PUBLIC_ENDPOINT_URL;
  
    if (!endpointUrl) {
      throw new Error('No ACS endpoint URL provided');
    }
  
    return endpointUrl;
  };
  
  export const getAdminUserId = (): string => {
    const adminUserId = process.env.NEXT_PUBLIC_ADMIN_USER_ID;
  
    if (!adminUserId) {
      throw new Error('No ACS Admin UserId provided');
    }
  
    return adminUserId;
  };
  
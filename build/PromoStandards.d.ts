import { AxiosRequestConfig } from 'axios';
export declare namespace PromoStandards {
    /** Base Attributes for a PromoStandards Client */
    interface PromoStandardsBaseAttributes {
        id?: string;
        password?: string;
        endpoints?: ServiceEndpointType[];
        format?: ResponseFormatType;
        axiosConfig?: AxiosRequestConfig;
    }
    /** Type of service check */
    type ServiceType = "Inventory" | "Invoice" | "MediaContent" | "OrderShipmentNotification" | "OrderStatus" | "ProductData" | "ProductPricingAndConfiguration" | "PurchaseOrder";
    /** Service endpoint object signature check */
    type ServiceEndpointType = {
        type: ServiceType;
        version: string;
        url: string;
    };
    type ResponseFormatType = "xml" | "json";
    /** Class representing a PromoStandards Client */
    class Client {
        id?: string;
        password?: string;
        endpoints?: ServiceEndpointType[];
        axiosConfig: AxiosRequestConfig;
        format: ResponseFormatType;
        /**
         * Create a new PromoStandards Client
         * @param {string} options.id - Username provided by the supplier
         * @param {string} options.password - Password provided by the supplier
         * @param {Array.<ServiceEndpointType>} options.endpoints - List of endpoint objects
         */
        constructor(options?: PromoStandardsBaseAttributes);
        /**
         * Get the service endpoint, if present.
         * @param {ServiceName} serviceName Service Endpoint Name
         */
        getEndpoint(serviceName: ServiceType): ServiceEndpointType;
        /**
         * Generic method to use for all PS methods
         * @param {string} serviceAndMethodName - Identifies the PromoStandards service type and method name
         * @param params - Arguments required for the given PromoStandards method
         * @todo validate arguments based on service/method
         * */
        promoStandardsAPIRequest(serviceAndMethodName: string, params: any): Promise<any>;
        /** @todo Add TypeChecking for all methods. */
        readonly productData: {
            getProduct: any;
            getProductSellable: any;
            getProductDateModified: any;
            getProductCloseOut: any;
        };
        readonly mediaContent: {
            getMediaContent: any;
            getMediaDateModified: any;
        };
        readonly inventory: {
            getInventoryLevels: any;
            getFilterValues: any;
        };
        readonly orderStatus: {
            getOrderStatusDetails: any;
            getOrderStatusTypes: any;
        };
        readonly orderShipmentNotification: {
            getOrderShipmentNotification: any;
        };
        readonly invoice: {
            getInvoices: any;
        };
        readonly productPricingAndConfiguration: {
            getAvailableLocations: any;
            getDecorationColors: any;
            getFobPoints: any;
            getAvailableCharges: any;
            getConfigurationAndPricing: any;
        };
    }
}

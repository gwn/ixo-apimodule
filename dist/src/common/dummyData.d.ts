import { ISovrinDidModel } from "./models";
export declare const projectData: {
    "@context": string;
    "@type": string;
    schemaVersion: string;
    name: string;
    description: string;
    image: string;
    imageDescription: string;
    location: string;
    sdgs: string[];
    startDate: string;
    endDate: string;
    status: string;
    stage: string;
    relayerNode: string;
    version: {
        versionNumber: string;
        effectiveDate: string;
        notes: string;
    };
    terms: {
        "@type": string;
        paymentTemplateId: string;
    };
    privacy: {
        pageView: string;
        entityView: string;
        credentials: {
            credential: string;
            issuer: string;
        }[];
    };
    creator: {
        displayName: string;
        location: string;
        email: string;
        website: string;
        mission: string;
        id: string;
        credentialId: string;
        logo: string;
    };
    owner: {
        displayName: string;
        location: string;
        email: string;
        website: string;
        mission: string;
        id: string;
        logo: string;
    };
    ddoTags: {
        category: string;
        tags: string[];
    }[];
    displayCredentials: {
        "@context": string;
        items: {
            credential: string;
            badge: string;
        }[];
    };
    page: {
        cid: string;
        version: string;
    };
    claims: {
        "@context": string;
        items: {
            "@id": string;
            visibility: string;
            title: string;
            description: string;
            targetMin: number;
            targetMax: number;
            startDate: string;
            endDate: string;
            agents: {
                role: string;
                credential: string;
                autoApprove: boolean;
            }[];
            claimEvaluation: {
                "@context": string;
                "@id": string;
                methodology: string;
                attributes: string[];
            }[];
            claimApproval: {
                "@context": string;
                "@id": string;
                condition: string;
                attributes: string[];
            }[];
            claimEnrichment: {
                "@context": string;
                "@id": string;
                productId: string;
                resources: string[];
            }[];
        }[];
    };
    linkedEntities: {
        "@type": string;
        id: string;
    }[];
    fees: {
        "@context": string;
        items: any[];
    };
    stake: {
        "@context": string;
        items: {
            "@type": string;
            id: string;
            denom: string;
            stakeAddress: string;
            minStake: number;
            slashCondition: string;
            slashFactor: number;
            slashAmount: number;
            unbondPeriod: number;
        }[];
    };
    nodes: {
        "@context": string;
        items: {
            "@type": string;
            id: string;
        }[];
    };
    funding: {
        "@context": string;
        items: {
            "@type": string;
            id: string;
        }[];
    };
    keys: {
        "@context": string;
        items: {
            purpose: string;
            "@type": string;
            controller: string;
            keyValue: string;
            dateCreated: string;
            dateUpdated: string;
            signature: string;
        }[];
    };
    service: {
        "@type": string;
        id: string;
        serviceEndpoint: string;
        description: string;
        publicKey: string;
        properties: string;
    }[];
    data: {
        "@type": string;
        id: string;
        serviceEndpoint: string;
        properties: string;
    }[];
};
export declare const ixoDid1: ISovrinDidModel;
export declare const ixoDid2: ISovrinDidModel;
export declare const ixoDid3: ISovrinDidModel;
export declare const PDSUrl = "https://pds_pandora.ixo.world/";
export declare const BLOCKSYNC_URL = "http://172.20.1.37:80";

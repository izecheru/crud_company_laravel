export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface Region {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface RegionWithLocality {
    id: number;
    name: string;
    localities: Locality[];
    created_at: string;
    updated_at: string;
}

interface Locality {
    id: number;
    name: string;
    region_id: number;
    created_at: string;
    updated_at: string;
    region: Region;
}

interface Company {
    id: number;
    name: string;
    fiscal_code: string;
    locality_name: string;
    region_name: string;
    description: string;
    created_at: string;
    updated_at: string;
    locality: Locality;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

interface Pagination {
    current_page: number;
    data: Company[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface CompanyPageProps extends PageProps {
    companies: Pagination;
}

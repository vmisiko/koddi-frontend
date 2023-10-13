
export interface Bike {
    date_stolen:               string;
    description:               string;
    frame_colors:              string[];
    frame_model:               string;
    id:                        number;
    is_stock_img:              boolean;
    large_img:                 string;
    location_found:            null;
    manufacturer_name:         string;
    external_id:               null;
    registry_name:             null;
    registry_url:              null;
    serial:                    string;
    status:                    string;
    stolen:                    boolean;
    stolen_coordinates:        number[];
    stolen_location:           string;
    thumb:                     string;
    title:                     string;
    url:                       string;
    year:                      number;
    registration_created_at:   number;
    registration_updated_at:   number;
    api_url:                   string;
    manufacturer_id:           number;
    paint_description:         null;
    name:                      null;
    frame_size:                string;
    rear_tire_narrow:          boolean;
    front_tire_narrow:         null;
    type_of_cycle:             string;
    test_bike:                 boolean;
    rear_wheel_size_iso_bsd:   null;
    front_wheel_size_iso_bsd:  null;
    handlebar_type_slug:       null;
    frame_material_slug:       null;
    front_gear_type_slug:      null;
    rear_gear_type_slug:       null;
    extra_registration_number: string;
    additional_registration:   string;
    propulsion_type_slug:      string;
    stolen_record:             StolenRecord;
    public_images:             PublicImage[];
    components:                any[];
}

export interface PublicImage {
    name:   string;
    full:   string;
    large:  string;
    medium: string;
    thumb:  string;
    id:     number;
}

export interface StolenRecord {
    date_stolen:              number;
    location:                 string;
    latitude:                 number;
    longitude:                number;
    theft_description:        string;
    locking_description:      string;
    lock_defeat_description:  string;
    police_report_number:     string;
    police_report_department: string;
    created_at:               number;
    create_open311:           boolean;
    id:                       number;
}


export class BikeList {
    public bikes: Bike[];
    public currentPage: number;
    public itemsPerPage: number;
    public total: number;
    
    constructor(
        {   
            bikes,
            currentPage,
            itemsPerPage,
            total,  
        }: {
            bikes: Bike[],
            currentPage: number,
            itemsPerPage: number,
            total: number,
        }
    ) { 
        this.bikes = bikes;
        this.currentPage = currentPage;
        this.itemsPerPage = itemsPerPage;
        this.total = total;
    }

    get pagination():Pagination {
        const total = 136894 // have harcorded total to help in pagination as the api does not return total
        return {
            total: total,
            page: this.currentPage,
            perPage: this.itemsPerPage,
            lastPage: Math.ceil(total / this.itemsPerPage),
            hasNextPage: this.currentPage < Math.ceil(total / this.itemsPerPage),
            hasPreviousPage: this.currentPage > 1,
        }
        
    }

    static async instance(bikes: Bike[], filters?: Filters)  {
        const currentPage = filters?.page ?? 1;
        const itemsPerPage = filters?.per_page ?? 10;
        const total: number = bikes.length;
        return new BikeList({ bikes, currentPage, itemsPerPage, total });
    }
    
}

export interface Filters {
    page: number;
    per_page: number;
    query: string | '';
}


export interface Pagination {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;

}
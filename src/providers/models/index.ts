
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

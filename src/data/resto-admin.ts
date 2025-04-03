import { TCustomer } from "@/data/customer";
import { TResto } from "@/data/resto";

export type RestoAdmin = Required<TCustomer> & {
    'restaurant':TResto}

export type RestoAdminList = {
    draw: number;
    data: RestoAdmin[];
    recordsFiltered: number;
    recordsTotal: number;

}

export const restoAdminListSchema = {
    "type": "object",
    "required": [
        "draw",
        "data",
        "recordsFiltered",
        "recordsTotal"
    ],
    "properties": {
        "draw": {
            "type": "integer"
        },
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "user_id",
                    "resto_id",
                    "user_no",
                    "first_name",
                    "middle_name",
                    "last_name",
                    "email_address",
                    "phone_number",
                    "gender",
                    "user_type",
                    "created_by",
                    "updated_by",
                    "deleted_by",
                    "date_created",
                    "date_updated",
                    "date_deleted",
                    "restaurant"
                ],
                "properties": {
                    "user_id": {
                        "type": "string"
                    },
                    "resto_id": {
                        "type": "string"
                    },
                    "user_no": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "middle_name": {
                        "type": [
                            "null",
                            "string"
                        ]
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email_address": {
                        "type": "string"
                    },
                    "phone_number": {
                        "type": "null"
                    },
                    "gender": {
                        "type": "null"
                    },
                    "user_type": {
                        "type": "string"
                    },
                    "created_by": {
                        "type": [
                            "string",
                            "null"
                        ]
                    },
                    "updated_by": {
                        "type": "null"
                    },
                    "deleted_by": {
                        "type": "null"
                    },
                    "date_created": {
                        "type": "string"
                    },
                    "date_updated": {
                        "type": "string"
                    },
                    "date_deleted": {
                        "type": "null"
                    },
                    "restaurant": {
                        "type": "object",
                        "required": [
                            "resto_img",
                            "resto_id",
                            "resto_no",
                            "resto_name",
                            "resto_email",
                            "resto_phone",
                            "resto_landline",
                            "resto_website",
                            "restocatg_id",
                            "status",
                            "created_by",
                            "updated_by",
                            "deleted_by",
                            "date_created",
                            "date_updated",
                            "date_deleted"
                        ],
                        "properties": {
                            "resto_img": {
                                "type": "string"
                            },
                            "resto_id": {
                                "type": "string"
                            },
                            "resto_no": {
                                "type": "string"
                            },
                            "resto_name": {
                                "type": "string"
                            },
                            "resto_email": {
                                "type": "string"
                            },
                            "resto_phone": {
                                "type": "string"
                            },
                            "resto_landline": {
                                "type": "string"
                            },
                            "resto_website": {
                                "type": "string"
                            },
                            "restocatg_id": {
                                "type": "string"
                            },
                            "status": {
                                "type": "string"
                            },
                            "created_by": {
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "updated_by": {
                                "type": "null"
                            },
                            "deleted_by": {
                                "type": "null"
                            },
                            "date_created": {
                                "type": "string"
                            },
                            "date_updated": {
                                "type": "string"
                            },
                            "date_deleted": {
                                "type": "null"
                            }
                        }
                    }
                }
            }
        },
        "recordsFiltered": {
            "type": "integer"
        },
        "recordsTotal": {
            "type": "integer"
        }
    }
}

export const restoAdminList = {
  "data": [
    {
        "user_id": "0f98dea5-37b7-4c51-a081-d7086af09d4a",
        "resto_id": "9715b035-2cec-4933-b39d-d0bd82bb858d",
        "user_no": "USR-2608799806637",
        "first_name": "Marian Mae",
        "middle_name": null,
        "last_name": "Simon",
        "email_address": "mariasimon28@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:31.000Z",
        "date_updated": "2025-02-10T15:04:31.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000012.png",
            "resto_id": "9715b035-2cec-4933-b39d-d0bd82bb858d",
            "resto_no": "RTO-3478399741590",
            "resto_name": "The French Baker",
            "resto_email": "info@thefrenchbaker.com",
            "resto_phone": "09298564842",
            "resto_landline": "+63 (2) ",
            "resto_website": "thefrenchbaker.com",
            "restocatg_id": "05baa8f5-0884-4206-a65a-6d1925756d39",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:30.000Z",
            "date_updated": "2025-02-10T15:04:30.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "1ea006a5-1a64-4ac3-a601-3c76a43eaa60",
        "resto_id": "ec48a206-da00-4875-ab21-0016794cf330",
        "user_no": "USR-2608799803663",
        "first_name": "Sydney",
        "middle_name": "Blayne",
        "last_name": "Bonilla",
        "email_address": "Sydney@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:29.000Z",
        "date_updated": "2025-02-10T15:04:29.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000003.png",
            "resto_id": "ec48a206-da00-4875-ab21-0016794cf330",
            "resto_no": "RTO-3478399737449",
            "resto_name": "Angels Pizza",
            "resto_email": "angelspizza@gmail.com",
            "resto_phone": "09287635411",
            "resto_landline": "8922-222",
            "resto_website": "www.angelspizza.com.ph",
            "restocatg_id": "5dabdaac-3751-42d5-baa5-4e0d03d4923c",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:28.000Z",
            "date_updated": "2025-02-10T15:04:28.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "29810573-358a-4a3b-8e20-d88c346befd8",
        "resto_id": "95592b80-21dd-42dd-9ee6-dcf97c765d04",
        "user_no": "USR-2608799807124",
        "first_name": "Lyndsey Ann",
        "middle_name": "Minezes",
        "last_name": "Bartolome",
        "email_address": "annlynbartolome@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:31.000Z",
        "date_updated": "2025-02-10T15:04:31.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000016.png",
            "resto_id": "95592b80-21dd-42dd-9ee6-dcf97c765d04",
            "resto_no": "RTO-3478399741594",
            "resto_name": "Ilustrado Restaurant",
            "resto_email": "catering@ilustradorestaurant.com",
            "resto_phone": "+63 (998) 850",
            "resto_landline": "+63 (2) ",
            "resto_website": "ilustradorestaurant.com.ph",
            "restocatg_id": "200080d5-29df-4157-8e9e-7c613356f9ce",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:30.000Z",
            "date_updated": "2025-02-10T15:04:30.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "2aa66525-0df5-46cc-a741-76dc983d994c",
        "resto_id": "9bd5ce9a-b830-4f31-a8aa-e8d42fd4393b",
        "user_no": "USR-2608799803542",
        "first_name": "Lee",
        "middle_name": "Caprice",
        "last_name": "Maynard",
        "email_address": "Lee@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:29.000Z",
        "date_updated": "2025-02-10T15:04:29.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000002.png",
            "resto_id": "9bd5ce9a-b830-4f31-a8aa-e8d42fd4393b",
            "resto_no": "RTO-3478399737448",
            "resto_name": "Starbucks",
            "resto_email": "customer@rustancoffee.ph",
            "resto_phone": "09457157924",
            "resto_landline": "8462-626",
            "resto_website": "www.starbucks.ph",
            "restocatg_id": "fd60177c-bc1f-4913-b7fc-a15dc620dac3",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:28.000Z",
            "date_updated": "2025-02-10T15:04:28.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "92849e50-b4c1-4b61-a5d5-d64bfa4b2024",
        "resto_id": "76eef8e8-9103-429c-af7f-b7731ebe2616",
        "user_no": "USR-2608799806758",
        "first_name": "Gregg",
        "middle_name": "Mendez",
        "last_name": "Lopez",
        "email_address": "mendezgregg@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:31.000Z",
        "date_updated": "2025-02-10T15:04:31.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000013.png",
            "resto_id": "76eef8e8-9103-429c-af7f-b7731ebe2616",
            "resto_no": "RTO-3478399741591",
            "resto_name": "Cafe France",
            "resto_email": "cf_unave@cafefrance.net",
            "resto_phone": "+63 (2) 8 254",
            "resto_landline": "+63 (2) ",
            "resto_website": "www.cafefrance.net",
            "restocatg_id": "fd60177c-bc1f-4913-b7fc-a15dc620dac3",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:30.000Z",
            "date_updated": "2025-02-10T15:04:30.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "93058754-c5f5-4d4e-bd99-8a3303d2eba7",
        "resto_id": "732164d4-e7c4-4d0b-9969-9a1b1b3cde03",
        "user_no": "USR-2608799806508",
        "first_name": "Vicky",
        "middle_name": null,
        "last_name": "Sanchez",
        "email_address": "vickysanchez@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-02-10T15:04:31.000Z",
        "date_updated": "2025-02-10T15:04:31.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-000000000011.png",
            "resto_id": "732164d4-e7c4-4d0b-9969-9a1b1b3cde03",
            "resto_no": "RTO-3478399741589",
            "resto_name": "Conti’s Bakeshop & Restaurant",
            "resto_email": "ctf.contis@yahoo.com",
            "resto_phone": "09514548948",
            "resto_landline": "8921 347",
            "resto_website": "www.contis.ph",
            "restocatg_id": "05baa8f5-0884-4206-a65a-6d1925756d39",
            "status": "Open",
            "created_by": "70ea56c6-407b-4bdf-8cf0-b4e09df50fe8",
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-02-10T15:04:30.000Z",
            "date_updated": "2025-02-10T15:04:30.000Z",
            "date_deleted": null
        }
    },
    {
        "user_id": "9a759847-0eb8-4244-a8de-e3c3ec85298f",
        "resto_id": "f4fb0e43-626c-4448-b2d0-fa292ceddcfe",
        "user_no": "USR-2614977373434",
        "first_name": "romantic",
        "middle_name": "",
        "last_name": "baboy",
        "email_address": "romanticbaboy2@gmail.com",
        "phone_number": null,
        "gender": null,
        "user_type": "Resto_Admin",
        "created_by": null,
        "updated_by": null,
        "deleted_by": null,
        "date_created": "2025-03-30T07:04:09.000Z",
        "date_updated": "2025-03-30T07:04:09.000Z",
        "date_deleted": null,
        "restaurant": {
            "resto_img": "http://localhost:3600/public/restaurants/resto_img-1743318169786.png",
            "resto_id": "f4fb0e43-626c-4448-b2d0-fa292ceddcfe",
            "resto_no": "RTO-3486636339624",
            "resto_name": "Romantic Baboy 2",
            "resto_email": "romanticbaboy2@gmail.com",
            "resto_phone": "09123456789",
            "resto_landline": "98765432",
            "resto_website": "www.romanticbaboy.com",
            "restocatg_id": "fd60177c-bc1f-4913-b7fc-a15dc620dac3",
            "status": "Open",
            "created_by": null,
            "updated_by": null,
            "deleted_by": null,
            "date_created": "2025-03-30T07:02:49.000Z",
            "date_updated": "2025-03-30T07:02:49.000Z",
            "date_deleted": null
        }
    },],
    "recordsFiltered": 22,
    "recordsTotal": 43}

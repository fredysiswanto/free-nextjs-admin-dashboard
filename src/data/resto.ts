export type TRestoCategory = {
  restocatg_id: string;
  restocatg_name: string;
  created_by: string;
  updated_by: string | null;
  deleted_by: string | null;
  date_created: string;
  date_updated: string;
  date_deleted: string | null;
}
export type TResto = {
  resto_img: string;
  resto_id: string;
  resto_no: string;
  resto_name: string;
  resto_email: string;
  resto_phone: string;
  resto_landline: string;
  resto_website: string;
  resto_catg_id: string;
  status: string;
  created_by: string;
  updated_by: string | null;
  deleted_by: string | null;
  date_created: string;
  date_updated: string;
  date_deleted: string | null;
  restaurant_category: TRestoCategory;
}



import { Hotel } from './hotel';
export interface Order {
    id: number;
    hotel: Hotel;
    start_date: string;
    end_date: string;
    created_at: string;
    additional_info: string;
}

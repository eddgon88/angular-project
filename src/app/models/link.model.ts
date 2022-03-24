export interface Link {
    order_link: string;
    link_status: number;
}
export enum LinkStatus {
    Completed = 3,
    Canceled = 2,
    Expired = 4,
    Pending = 1,
}
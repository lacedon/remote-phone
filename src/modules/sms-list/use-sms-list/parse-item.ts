interface RawItem {
  _id: number;
  thread_id: number;
  address: string;
  person: number | undefined;
  date: number;
  date_sent: number;
  protocol: number;
  read: number;
  status: number;
  type: number;
  body: string;
  service_center: string;
  locked: number;
  error_code: number;
  sub_id: number;
  seen: number;
  deletable: number;
  sim_slot: number;
  hidden: number;
  app_id: number;
  msg_id: number;
  reserved: number;
  pri: number;
  teleservice_id: number;
  svc_cmd: number;
  roam_pending: number;
  spam_report: number;
  secret_mode: number;
  safe_message: number;
  favorite: number;
}
export interface Item {
  id: number;
  personId: number | null;
  address: string;
  date: Date;
  body: string;
}
export function parseItem(item: RawItem): Item {
  return {
    id: item._id,
    personId: typeof item.person === 'number' && item.person >=0 ? item.person : null,
    address: item.address,
    date: new Date(item.date),
    body: item.body,
  };
}

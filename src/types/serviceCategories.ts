
import { Service, SubService } from "./services";

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  subServices: SubService[];
}

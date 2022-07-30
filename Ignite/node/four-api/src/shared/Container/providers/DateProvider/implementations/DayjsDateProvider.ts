import dayjs  from "dayjs";
import utc from "dayjs/plugin/utc";
import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);


class DayjsDateProvider implements IDateProvider{

    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_formated = this.convertToUtc(end_date)
        const start_date_formated = this.convertToUtc(start_date)
        return dayjs(end_date_formated).diff(start_date_formated,"hours");
    }

    convertToUtc(date: Date) : string {
        const formated_date = dayjs(date).utc().local().format();
        return formated_date;
    }

    dateNow() : Date {
        return dayjs().toDate();
    }


}

export { DayjsDateProvider }
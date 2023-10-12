import moment from "moment"

const useTimeZone =  () => {

    const formaDateTimeYearMonthDay = (date: string) => {
        return moment(date).format('dddd MMMM YYYY');
    }

    return {
        formaDateTimeYearMonthDay,
    }
}

export default useTimeZone;
import moment from 'moment';

function getMoment(v?) {
    return v ? moment(v) : moment();
}

function dateLocalPipeTransform(value: string): string {
    // -->Format: to my locale and date output format
    return getMoment(value).locale('en').format('M/D/YYYY');
}

export {
    getMoment,
    dateLocalPipeTransform
};

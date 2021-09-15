import moment from "moment";

/**
 *
 * @param {Date|string} date
 * @returns {string}
 */
export function formatDate(date) {
    return moment(date).format('ll');
}

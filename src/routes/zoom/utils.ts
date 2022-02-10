import axios from 'axios';

import { ZoomReleaseDetails } from './index.d';

/**
 * @description returns relative time since given timetamp
 * @see {@link https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time}
 * @param {Date} timestamp Date object for requested timestamp
 * @returns {String} relative time difference
 */
function timeDifference(timestamp: Date): string {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = new Date().getTime() - timestamp.getTime();

  // define default values
  let duration = Math.round(elapsed / msPerYear);
  let phrase = 'year';

  // step through each possible duration
  if (elapsed < msPerMinute) {
    duration = Math.round(elapsed / 1000);
    phrase = 'second';
  } else if (elapsed < msPerHour) {
    duration = Math.round(elapsed / msPerMinute);
    phrase = 'minute';
  } else if (elapsed < msPerDay) {
    duration = Math.round(elapsed / msPerHour);
    phrase = 'hour';
  } else if (elapsed < msPerMonth) {
    duration = Math.round(elapsed / msPerDay);
    phrase = 'day';
  } else if (elapsed < msPerYear) {
    duration = Math.round(elapsed / msPerMonth);
    phrase = 'month';
  }

  // only include plural if not singular
  return `about ${duration} ${duration === 1 ? phrase : `${phrase}s`} ago`;
}

/**
 * @description fetches the latest release details of the Zoom CLI
 * @returns {Promise<ZoomReleaseDetails>} latest zoom details
 */
export async function getLatestZoomReleaseDetails(): Promise<ZoomReleaseDetails> {
  const {
    data: {
      html_url: htmlUrl,
      name,
      published_at: publishedAt,
    },
  } = await axios.get('https://api.github.com/repos/tmonfre/zoom-cli/releases/latest');

  return {
    timeSinceRelease: timeDifference(new Date(publishedAt)),
    url: htmlUrl,
    version: name,
  };
}

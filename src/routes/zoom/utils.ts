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

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} seconds ago`;
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} minutes ago`;
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} hours ago`;
  }

  if (elapsed < msPerMonth) {
    return `about ${Math.round(elapsed / msPerDay)} days ago`;
  }

  if (elapsed < msPerYear) {
    return `about ${Math.round(elapsed / msPerMonth)} months ago`;
  }

  return `about ${Math.round(elapsed / msPerYear)} years ago`;
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

import { get } from "./Api";


export const getChannels = () => {
  return get(`/channels`);
};

export const getChannelDetail = (channel_id) => {
  return get(`/channels/${channel_id}`);
};

export const getVideoDetail = (id) => {
  return get(`/videos/${id}`);
};

export const getHomeData = (city, subject) => {
  return get(`/landingpage?region=${city}&subject=${subject}`);
};

export const getGradeTvData = () => {
  return get(`/gradetv`);
};



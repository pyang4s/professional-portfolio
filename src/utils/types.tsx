export type UserProfile = {
  name: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  summary: string;
  linkedin_url: string;
  github_url: string;
};

export type Projects = {
  name: string;
  description: string;
  imageUrl: string;
  gitHubLink: string;
  language: string;
  framework: string;
  path: string;
};

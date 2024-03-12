import { TCommonResponseSchema } from "@/schemas/common.schema";

export const createObjectFromQueryString = (queryString: URLSearchParams) => {
  let obj: TCommonResponseSchema = {};
  queryString.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

export const paths = {
  homePage() {
    return "/home";
  },
};

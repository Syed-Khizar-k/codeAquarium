import { StaticImageData } from "next/image";
// children type

export interface childrenType {
  children: React.ReactNode;
}
// context api data type
export interface AppContextType {
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  toggleSideMenu?: () => void;
  toggleModal?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>
  showSidebarWishlist?: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSidebarWishlist?: React.Dispatch<React.SetStateAction<boolean>>;
  openWishlist?: boolean;
  setOpenWishlist: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
  modalId: number;
}
export interface idType {
  id?: number | string;
}

// menu type

interface DropdownItem {
  link: string;
  title: string;
}

export interface MenuItem {
  id: number;
  label: string;
  link: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
}

export interface faqInterFace {
  id: number;
  title: string;
  details: string;
}

export interface projectType {
  id: number;
  img: StaticImageData;
  title: string;
  details: string;
  tag: string;
}
export interface clientReviewType {
  id: number;
  img: StaticImageData;
  title: string;
  name: string;
  details: string;
  ratting: number;

}
export interface blogDataType {
  id: number;
  img: StaticImageData;
  title: string;
  subTitle: string;
 
}

export interface ContentBlock {
  type: "paragraph" | "list" | "link" | "subheading" | "numbered-list" | "numbered-list-with-bullets" | "mixed-content";
  text?: string;
  items?: ListItem[] | NumberedListItemWithBullets[];
  url?: string;
  content?: MixedContentItem[];
}

export interface ListItem {
  text: string;
  heading?: string;
}

export interface NumberedListItemWithBullets {
  heading: string;
  text: string;
  bulletPoints: (string | { heading: string; text: string })[];
}

export interface MixedContentItem {
  type: "text" | "link" | "bold";
  content: string;
  url?: string;
}

export interface servicesType {
  id: number;
  img: StaticImageData;
  title: string;
  details: string;
  icon?: string;
  banner: StaticImageData;
  content: ContentBlock[];
  prev?: string;
}



export interface blogDataTwoType{
  id:number;
  title:string;
  text:string;
  image:StaticImageData;
  date:string;
}
export interface ProjectTag {
  name: string;
}

export interface caseDataType {
  id: number;
  title: string;
  titleTwo?: string;
  subText?: string;
  details: string;
  img: StaticImageData | string;
  tag?: string;
  bgImage: StaticImageData | string;
  image: StaticImageData | string;
  projectTags?: ProjectTag[]; 
  ProjectDate:string;
}

export interface teamDataType{
    id: number;
    img: StaticImageData;
    name: string;
    title: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
}
export interface ProductType {
  _id: number;
  categoryName: string;
  oldPrice: number;
  price: number;
  productDetails: string;
  productName: string;
  productQuantity: number;
  img: StaticImageData;
  totalCard?:number | undefined;
}
 

export interface UserReviewType {
  id:string;
  productName:string;
  review: string; 
  name: string;
  email: string;
  date: string;
  productId: string;
  categoryName: string;
  retting: number;
  img?:string | StaticImageData;
} 
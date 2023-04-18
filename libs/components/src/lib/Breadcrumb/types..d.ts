export interface BreadcrumbSegment {
   path: string;
   label: string;
}

export interface BreadcrumbProps {
   segments: BreadcrumbSegment[];
}


export interface serviceManageDataType{
    id:number;
    title:string;
    class:string;
    details:string;
}

export const serviceManageData: serviceManageDataType[] = [
    {
        id: 1,
        title: "Web Development",
        class: "single-services text-center",
        details: "Our Web Development services focus on creating dynamic and responsive websites tailored to your business needs. We utilize the latest technologies and industry best practices to deliver high-quality web solutions that engage your audience and drive results."
    },
    {
        id: 2,
        title: "Database Analysis",
        class: "single-services active text-center",
        details: "Our Database Analysis services involve in-depth examination and optimization of your database systems. We analyze data structures, performance metrics, and query optimization to ensure efficient data storage, retrieval, and management, enhancing "
    },
    {
        id: 3,
        title: "Server Security",
        class: "single-services text-center",
        details: "Server Security is paramount in today's digital landscape. Our Server Security services focus on implementing robust security measures to safeguard your servers from cyber threats and unauthorized access. We employ encryption, access control,"
    },
];

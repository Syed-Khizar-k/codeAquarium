/** @jsxImportSource react */
import { servicesData } from "@/data/services-data";
import { idType, servicesType } from "@/interFace/interFace";
import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";

const ServiceDetailsMain = ({ id }: idType) => {
  const service: servicesType | undefined = servicesData.find((item) => item.id === Number(id));
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return (
    <>
      <section className="bd-service-details-area pt-75 pb-100">
        <div className="container">
          <div className="row">
            <h4 className="mb-25">{service.title}</h4>
            <div className="col-lg-8">
              <div className="bd-service-details mb-50">
                <div className="bd-service-details-img mb-50">
                  <Image
                    src={service.banner}
                    style={{ width: "100%", height: '578px', objectFit: "cover" }}
                    alt="img not found"
                    loading="lazy"
                  />
                </div>


                {/* Render content blocks if available, otherwise fall back to details */}
                {service.content ? (
                  <div className="service-content-blocks">
                    {service.content.map((block: any, blockIndex: number) => {
                      if (block.type === "paragraph") {
                        return (
                          <p key={blockIndex} className="mb-10">
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === "subheading") {
                        return (
                          <h5 key={blockIndex} className="mt-20 mb-10 service-subheading">
                            {block.text}
                          </h5>
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <div key={blockIndex} className="bd-service-details-feature mb-30">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                              {block.items?.map((listItem: any, listIndex: number) => (
                                <li
                                  key={listIndex}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: '0.7em',
                                    lineHeight: '1.3',
                                  }}
                                >
                                  <span style={{ marginRight: '0.5em' }}>•</span>
                                  <div style={{ flex: 1 }}>
                                    {listItem.heading && (
                                      <strong style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>
                                        {listItem.heading}:
                                      </strong>
                                    )}
                                    {listItem.text}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }

                      if (block.type === "numbered-list") {
                        return (
                          <div key={blockIndex} className="bd-service-details-feature mb-30">
                            <div style={{ paddingLeft: '20px', margin: 0 }}>
                              {block.items?.map((listItem: any, listIndex: number) => (
                                <div
                                  key={listIndex}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    marginBottom: '0.5em',
                                    lineHeight: '1.6',
                                  }}
                                >
                                  <span style={{ marginRight: '0.5em', fontWeight: 'bold' }}>
                                    {listIndex + 1}.
                                  </span>
                                  <div style={{ flex: 1 }}>
                                    {listItem.heading && (
                                      <div>
                                        <strong>{listItem.heading}:</strong>
                                      </div>
                                    )}
                                    <div>{listItem.text}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }


if (block.type === "numbered-list-with-bullets") {
  return (
    <div key={blockIndex} className="bd-service-details-feature mb-30">
      <div style={{ paddingLeft: '20px', margin: 0 }}>
        {block.items?.map((listItem: any, listIndex: number) => (
          <div
            key={listIndex}
            style={{
              marginBottom: '1.5em',
              lineHeight: '1.6',
            }}
          >
            {/* Numbered item with heading and text */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '0.5em',
              }}
            >
              <span style={{ marginRight: '0.5em', fontWeight: 'bold' }}>
                {listIndex + 1}.
              </span>

              <div style={{ flex: 1 }}>
                {listItem.heading && (
                  <div>
                    <strong>{listItem.heading}:</strong>
                  </div>
                )}
                <div>{listItem.text}</div>
              </div>
            </div>

            {/* Bullet points underneath */}
            {listItem.bulletPoints && (
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '40px',
                  margin: '0.5em 0 0 0',
                  marginTop: '0.5em',
                }}
              >
                {listItem.bulletPoints.map(
                  (bulletPoint: any, bulletIndex: number) => (
                    <li
                      key={bulletIndex}
                      style={{
                        marginBottom: '0.3em',
                        display: 'flex',
                        alignItems: 'flex-start',
                      }}
                    >
                      {/* Bullet */}
                      <span style={{ marginRight: '0.5em' }}>•</span>

                      {/* Content with optional heading */}
                      <div style={{ flex: 1 }}>
                        {typeof bulletPoint === 'string' ? (
                          bulletPoint
                        ) : (
                          <>
                            {bulletPoint.heading && (
                              <strong
                                style={{
                                  whiteSpace: 'nowrap',
                                  marginRight: '0.5em',
                                }}
                              >
                                {bulletPoint.heading}:
                              </strong>
                            )}
                            {bulletPoint.text}
                          </>
                        )}
                      </div>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}




                      
                      if (block.type === "link") {
                        return (
                          <a
                            key={blockIndex}
                            href={block.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="service-link mb-30 d-block"
                            style={{ color: 'blue' }}
                          >
                            {block.text}
                          </a>
                        );
                      }

                      if (block.type === "mixed-content") {
                        return (
                          <div key={blockIndex} className="mixed-content-block mb-10">
                            {block.content?.map((item: any, itemIndex: number) => {
                              if (item.type === "text") {
                                return (
                                  <span key={itemIndex} className="mixed-text">
                                    {item.content}
                                  </span>
                                );
                              }
                              if (item.type === "bold") {
                                return (
                                  <strong key={itemIndex} className="mixed-bold">
                                    {item.content}
                                  </strong>
                                );
                              }
                              if (item.type === "link") {
                                return (
                                  <a
                                    key={itemIndex}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mixed-link"
                                    style={{ color: 'blue' }}
                                  >
                                    {item.content}
                                  </a>
                                );
                              }
                              return null;
                            })}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                ) : (
                  <p className="mb-30">
                    {service.details}
                  </p>
                )}

                








                
           
                {/* <div className="row pb-10">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="bd-service-details-feature mb-30">
                                            <h5 className="mb-20">Finished Check Steps</h5>
                                            <ul>
                                                <li><i className="far fa-check"></i> Assets Optimizations</li>
                                                <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                                <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                                <li><i className="far fa-check"></i> Laravel Structure</li>
                                                <li><i className="far fa-check"></i> Assets Optimizations</li>
                                                <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                                <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="bd-service-details-feature-img mb-30">
                                            <Image src={blogTwo} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                        </div>
                                    </div>
                                </div> */}
                {/* <h4 className="mb-30">FAQ on the Service</h4>
                                <FaqContent/> */}
              </div>
            </div>
            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsMain;
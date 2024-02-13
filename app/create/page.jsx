"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import Axios from "axios";
import { useRouter } from "next/navigation";
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { v4 } from "uuid";
import Layout from "../components/Layout";

export default function Create() {
  const MySwal = withReactContent(Swal);

  const [category, setCategory] = useState("Electronics");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [type, setType] = useState("bidding");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [organization_mobile_no, setOrganizationMobileNo] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [imageName, setImageName] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");


    const current_timestamp = new Date().toISOString().slice(0, 10);
  
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImageUri(file);
    setImageName(file.name);
    setSelectedFileName(file ? file.name : "");
  };

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createProduct = (e) => {
    e.preventDefault();

    const product_id = uuidv4();

    const type_ = type;

    if (name && category && cost && type && description  && start_date && end_date && imageUri) {
    
        setLoading(true);

        const imageRef = ref(storage, `products/${imageName + v4()}`);

        uploadBytes(imageRef, imageUri).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // console.log(url);

            Axios.post(
              "https://us-central1-bidleo-398811.cloudfunctions.net/add_product",
              {
                product_id: product_id,
                category: category,
                name: name,
                cost: cost,
                description: description,
                start_date: current_timestamp,
                end_date: end_date,
                organization_mobile_no: organization_mobile_no,
                image_uri: url,
                type: type_,
              }
            )
              .then((response) => {
                console.log("Response data:", response);
                

                setLoading(false);
                MySwal.fire({
                  position: "center",
                  icon: "success",
                  title: " Product Created Successfully",
                  text: "Product Added",
                });
                router.push("/Dashboard");
              })
              .catch((err) => {
                console.log(err.message);
                setLoading(false);
              });
          });
        });
      }
       else {
      MySwal.fire({
        title: "All Fields Are Required!",
        text: "Please Fill All Fields",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
  
    
    <Layout>
      <div
        className={`${
          !loading && "hidden"
        } w-full h-full fixed  top-0 left-0 bg-white opacity-75 z-50`}
      >
        <span className="text-blue-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
          <FontAwesomeIcon icon={faCircleNotch} spin size="5x" color="blue" />
        </span>
      </div>

  

      <div class="  mx-auto px-2 sm:px-8  min-h-[80vh] shadow shadow-violet-200">
        <div class="container mx-auto md:px-2 sm:px-8 my-5">
          <section class="py-8">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap -mx-4 mb-8">
                <div class="w-full lg:w-2/3 px-4 mx-auto">
                  <div class="px-8 md:px-16 pt-16 pb-8 bg-white rounded-xl">
                    <div class="max-w-xl mx-auto">
                      <form >
                        <div class="flex flex-wrap -mx-4 -mb-10">
                          <div class="w-full md:w-1/2 px-4 mb-10">
                            <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold  px-1 bg-white">
                                Product Name
                              </span>
                              <input
                                class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                id="formInput2-1"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="w-full md:w-1/2 px-4 mb-10">
                            <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                Cost in UGX
                              </span>
                              <input
                                class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                id="formInput2-3"
                                type="number"
                                value={cost}
                                onChange={(e) => {
                                  setCost(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="w-full md:w-1/2 px-4 mb-10">
                            <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                Select Category
                              </span>

                              <select
                                class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                id="formInput2-2"
                                value={category}
                                onChange={(e) => {
                                  setCategory(e.target.value);
                                }}
                              >
                                <option value="Electronics">Electronics</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Laptop">Laptops</option>
                                <option value="Tvs">Tvs</option>
                              </select>
                            </div>
                          </div>

                          <div class="w-full md:w-1/2 px-4 mb-10">
                            <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                Select Type
                              </span>

                              <select
                                class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                id="formInput2-2"
                                value={type}
                                // onChange={handleOptionChange}
                                onChange={e => setType(e.target.value)}
                              >
                                <option value="bidding">Bidding</option>
                                {/* <option value="purchase">Purchase</option> */}
                              </select>
                            </div>
                          </div>
                          <div class="w-full md:w-1/2 px-4 mb-10">
                              <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                                <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                  Start Date
                                </span>
                                <input
                                  class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                  id="formInput2-4"
                                  type="date"
                                  
                                  value={start_date}
                                  onChange={(e) => {
                                    setStartDate(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div class="w-full md:w-1/2 px-4 mb-10">
                              <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                                <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                  End Date
                                </span>
                                <input
                                  class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                  id="formInput2-4"
                                  type="date"
                                  value={end_date}
                                  onChange={(e) => {
                                    setEndDate(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div class="w-full md:w-1/2 px-4 mb-10">
                              <div class="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                                <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                Organization contact
                                </span>
                                <input
                                  class="block w-full outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold"
                                  id="formInput2-4"
                                  type="text"
                                  value={organization_mobile_no}
                                  onChange={(e) => {
                                    setOrganizationMobileNo(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          
                          <div class="w-full px-4 mb-10">
                            <div class="flex ">
                              <div class="w-full mx-auto py-8 px-4 text-center border-dashed border border-gray-400 hover:border-gray-600 rounded-lg">
                                <div class="relative group h-14 w-14 mx-auto mb-4">
                                  {selectedFileName ? (
                                    <div class="flex items-center justify-center h-14 w-14 bg-green-500 group-hover:bg-green-600 rounded-full">
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M6.71 5.71002L9 3.41002V13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8947 9.73478 14 10 14C10.2652 14 10.5196 13.8947 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V3.41002L13.29 5.71002C13.383 5.80375 13.4936 5.87814 13.6154 5.92891C13.7373 5.97968 13.868 6.00582 14 6.00582C14.132 6.00582 14.2627 5.97968 14.3846 5.92891C14.5064 5.87814 14.617 5.80375 14.71 5.71002C14.8037 5.61706 14.8781 5.50645 14.9289 5.3846C14.9797 5.26274 15.0058 5.13203 15.0058 5.00002C15.0058 4.86801 14.9797 4.7373 14.9289 4.61544C14.8781 4.49358 14.8037 4.38298 14.71 4.29002L10.71 0.290018C10.6149 0.198978 10.5028 0.127613 10.38 0.0800184C10.1365 -0.0199996 9.86346 -0.0199996 9.62 0.0800184C9.49725 0.127613 9.3851 0.198978 9.29 0.290018L5.29 4.29002C5.19676 4.38326 5.1228 4.49395 5.07234 4.61577C5.02188 4.73759 4.99591 4.86816 4.99591 5.00002C4.99591 5.13188 5.02188 5.26245 5.07234 5.38427C5.1228 5.50609 5.19676 5.61678 5.29 5.71002C5.38324 5.80326 5.49393 5.87722 5.61575 5.92768C5.73757 5.97814 5.86814 6.00411 6 6.00411C6.13186 6.00411 6.26243 5.97814 6.38425 5.92768C6.50607 5.87722 6.61676 5.80326 6.71 5.71002ZM19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8947 17.2652 18 17 18H3C2.73478 18 2.48043 17.8947 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V11C2 10.7348 1.89464 10.4804 1.70711 10.2929C1.51957 10.1054 1.26522 10 1 10C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10Z"
                                          fill="#E8EDFF"
                                        ></path>
                                      </svg>
                                    </div>
                                  ) : (
                                    <>
                                      <div class="flex items-center justify-center h-14 w-14 bg-blue-500 group-hover:bg-blue-600 rounded-full">
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M6.71 5.71002L9 3.41002V13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8947 9.73478 14 10 14C10.2652 14 10.5196 13.8947 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V3.41002L13.29 5.71002C13.383 5.80375 13.4936 5.87814 13.6154 5.92891C13.7373 5.97968 13.868 6.00582 14 6.00582C14.132 6.00582 14.2627 5.97968 14.3846 5.92891C14.5064 5.87814 14.617 5.80375 14.71 5.71002C14.8037 5.61706 14.8781 5.50645 14.9289 5.3846C14.9797 5.26274 15.0058 5.13203 15.0058 5.00002C15.0058 4.86801 14.9797 4.7373 14.9289 4.61544C14.8781 4.49358 14.8037 4.38298 14.71 4.29002L10.71 0.290018C10.6149 0.198978 10.5028 0.127613 10.38 0.0800184C10.1365 -0.0199996 9.86346 -0.0199996 9.62 0.0800184C9.49725 0.127613 9.3851 0.198978 9.29 0.290018L5.29 4.29002C5.19676 4.38326 5.1228 4.49395 5.07234 4.61577C5.02188 4.73759 4.99591 4.86816 4.99591 5.00002C4.99591 5.13188 5.02188 5.26245 5.07234 5.38427C5.1228 5.50609 5.19676 5.61678 5.29 5.71002C5.38324 5.80326 5.49393 5.87722 5.61575 5.92768C5.73757 5.97814 5.86814 6.00411 6 6.00411C6.13186 6.00411 6.26243 5.97814 6.38425 5.92768C6.50607 5.87722 6.61676 5.80326 6.71 5.71002ZM19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8947 17.2652 18 17 18H3C2.73478 18 2.48043 17.8947 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V11C2 10.7348 1.89464 10.4804 1.70711 10.2929C1.51957 10.1054 1.26522 10 1 10C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10Z"
                                            fill="#E8EDFF"
                                          ></path>
                                        </svg>
                                      </div>
                                    </>
                                  )}

                                  <input
                                    class="absolute top-0 left-0 h-14 w-14 opacity-0"
                                    id="formInput2-6"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                  />
                                </div>

                                <p class="font-semibold leading-normal mb-1">
                                  {selectedFileName ? (
                                    <span className="text-blue-500">
                                      {selectedFileName}
                                    </span>
                                  ) : (
                                    <>
                                      <span className="text-blue-500">
                                        Click to{" "}
                                      </span>
                                      <span className="text-gray-700">
                                        upload a file
                                      </span>
                                    </>
                                  )}
                                </p>
                                {selectedFileName ? (
                                  <span className="text-blue-500">
                                    Image Selected
                                  </span>
                                ) : (
                                  <>
                                    <span class="text-xs text-gray-700 font-semibold">
                                      PNG, JPG, JPEG up to 2MB
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div class="w-full px-4 mb-10">
                            <div class="relative w-full py-4 px-3 border border-gray-400 hover:border-gray-600 focus-within:border-blue-500 rounded-lg">
                              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-700 px-1 bg-white">
                                Description
                              </span>
                              <textarea
                                class="block w-full h-24 outline-none bg-transparent text-gray-500 placeholder-gray-500 font-semibold resize-none"
                                id="formInput2-5"
                                value={description}
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="mt-8 text-right">
                          <button
                            class="inline-block py-2 px-4 mb-2 text-xs text-center font-semibold leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                            type="button"
                            onClick={createProduct}
                          >
                            Create Product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      </Layout>
  );
}



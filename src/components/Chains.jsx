import React, { useState, useEffect } from "react";
import { API_URL } from "../Data/api";

export default function Chains() {
  const [vendorData, setvendorData] = useState([]);
  const [scroll,setScroll] = useState(0);
  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await response.json();
      setvendorData(newData);

      console.log(newData);
    } catch (error) {
      console.log("Failed to fetch FoodData");
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll =(direction)=>{
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 300;

    if(direction === "left"){
      gallery.scrollTo({
        left:gallery.scrollLeft - scrollAmount,
        behaviour: Smooth
      })
    }else if(direction === "right"){
      gallery.scrollTo({
        left:gallery.scrollRight + scrollAmount,
        behaviour: Smooth
      })
    }
  }
  return (
    <>
    <div className="btnSection">
      <button onClick={()=>handleScroll("left")}>Left</button>
      <button onClick={()=>handleScroll("left")}>Right</button>
    </div>
      <h3>Top restaurants in the City</h3>
      <section className="chainSection" id="chainGallery"
      onScroll={(e)=>setScroll(e.target.scrollLeft)}>
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <>
                <div className="vendorBox">
                  {vendor.firm.map((item) => {
                    return (
                      <>
                        <div>
                          {/* {item.firmName} */}
                          <div className="firmImages">
                            <img
                              className="firmImage"
                              src={`${API_URL}/uploads/${item.image}`}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </section>
    </>
  );
}

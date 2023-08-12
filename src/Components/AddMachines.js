import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import VpsMemberPortalHeader from "./VpsMemberPortalHeader";
import "../Style/memberLogin.css";
import DataTable from "react-data-table-component";
import { Buffer } from "buffer";
import Swal from "sweetalert2";

function AddMachines(props) {
  const location = useLocation();
  var IsLogin = "false";
  const showShortDescription = () => {
    if ($("#isShow").is(":checked")) {
      $(".shortDesc").removeClass("d-none");
      $("#short-desc").val("");
    } else {
      $(".shortDesc").addClass("d-none");
      $("#short-desc").val("");
    }
  };
  const addProduct = () => {
    if ($("#product-title").val() === "" && $("#product-desc").val() === "") {
      $("#product-title").addClass("is-invalid");
      $("#product-desc").addClass("is-invalid");
    } else if ($("#product-title").val() === "") {
      $("#product-title").addClass("is-invalid");
    } else if ($("#product-desc").val() === "") {
      $("#product-desc").addClass("is-invalid");
    } else {
      $("#product-title").removeClass("is-invalid");
      $("#product-desc").removeClass("is-invalid");
    }
    if (!$(".shortDesc").hasClass("d-none")) {
      if ($("#short-desc").val() === "") {
        $("#short-desc").addClass("is-invalid");
      } else {
        $("#short-desc").removeClass("is-invalid");
      }
    } else {
      $("#short-desc").removeClass("is-invalid");
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const [records, setRecords] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  var url = process.env.REACT_APP_VercelUrl + "/machines";
  var headers = {};
  useEffect(() => {
    url =
      searchVal !== ""
        ? process.env.REACT_APP_VercelUrl + "/machines" + `?title=` + searchVal
        : process.env.REACT_APP_VercelUrl + "/machines";
    getData();
    IsLogin =
      sessionStorage.getItem("IsLogin") !== null
        ? sessionStorage.getItem("IsLogin").toString()
        : false;
  }, [searchVal]);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => <img width={100} height={100} src={row.image} />,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row) =>
        row.Active !== undefined && row.Active !== null
          ? row.Active.toString()
          : "",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="btn btn-primary me-2"
            id={row._id}
            title={row.title}
            is_active={
              row.Active !== undefined && row.Active !== null
                ? row.Active.toString()
                : ""
            }
            is_show={
              row.IsShow !== undefined && row.IsShow !== null
                ? row.IsShow.toString()
                : ""
            }
            long_des={row.Description}
            image={row.image}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={editProduct}
          >
            Edit
          </button>
          <button
            className="btn btn-primary me-2"
            id={row._id}
            onClick={
              row.Active !== undefined && row.Active !== null
                ? row.Active.toString() === "true"
                  ? deactivateProduct
                  : activateProduct
                : ""
            }
          >
            {row.Active !== undefined && row.Active !== null
              ? row.Active.toString() === "true"
                ? "Deactivate"
                : "Activate"
              : ""}
          </button>
        </>
      ),
      sortable: true,
    },
  ];
  const addProductModal = () => {
    $("#exampleModal").find("input, textarea").val("");
    $("#exampleModal").find("#isShow").prop("checked", false);
    $("#exampleModal").find("#isActive").prop("checked", true);
    $("#exampleModal").find(".shortDesc").addClass("d-none");
    $("#exampleModal").find(".saveBtn").text("Save").removeAttr("product_id");
    setImage("");
  };
  const editProduct = (event) => {
    $("#exampleModal").find("#product-title").val(event.target.title);
    $("#exampleModal")
      .find("#product-desc")
      .val($(event.target).attr("long_des"));
    $(event.target).attr("is_show") === "true"
      ? $("#exampleModal").find("#isShow").prop("checked", true)
      : $("#exampleModal").find("#isShow").prop("checked", false);
    $(event.target).attr("is_show") === "true"
      ? $("#exampleModal").find(".shortDesc").removeClass("d-none")
      : $("#exampleModal").find(".shortDesc").addClass("d-none");
    $(event.target).attr("is_show") === "true"
      ? $("#exampleModal")
          .find("#short-desc")
          .val($(event.target).attr("short_des"))
      : $("#exampleModal").find(".shortDesc").addClass("d-none");
    $(event.target).attr("is_active") === "true"
      ? $("#exampleModal").find("#isActive").prop("checked", true)
      : $("#exampleModal").find("#isActive").prop("checked", false);
    setImage($(event.target).attr("image"));
    $("#exampleModal")
      .find(".saveBtn")
      .text("Update")
      .attr("product_id", event.target.id);
  };
  const deactivateProduct = async (event) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to deactivate the product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deactivate it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(process.env.REACT_APP_VercelUrl + "/machines/deactivatemachines", {
          method: "POST",
          body: JSON.stringify({
            id: event.target.id,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status > 199 && res.status < 300) {
            Swal.fire(
              "Deactivated!",
              "Your file has been deactivated.",
              "success"
            );
            getData();
          }
        });
      }
    });
  };
  const activateProduct = async (event) => {
    await fetch(process.env.REACT_APP_VercelUrl + "/machines/activatemachines", {
      method: "POST",
      body: JSON.stringify({
        id: event.target.id,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status > 199 && res.status < 300) {
        Swal.fire("Activated!", "Your file has been activated.", "success");
        getData();
      }
    });
  };
  const toggleSwitch = () => {
    // if ($('#flexSwitchCheckChecked').is(':checked')){
    //   $('#flexSwitchCheckChecked').prop('checked',false)
    // }
    // else{
    //   $('#flexSwitchCheckChecked').prop('checked',true)
    // }
  };
  const getData = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        data = data.myData;
        setRecords(data);
      })
      .catch(function (error) {
      });
  };
  // const { Buffer } = require('buffer');
  // const Binary  = require('binary');
  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setShowModal(true);
      };
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
      };
    }
  }
  function handleModalClose() {
    setShowModal(false);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let valid = true;
    if ($("#product-title").val() === "" && $("#product-desc").val() === "") {
      $("#product-title").addClass("is-invalid");
      $("#product-desc").addClass("is-invalid");
      valid = false;
    } else if ($("#product-title").val() === "") {
      $("#product-title").addClass("is-invalid");
      valid = false;
    } else if ($("#product-desc").val() === "") {
      $("#product-desc").addClass("is-invalid");
      valid = false;
    } else {
      $("#product-title").removeClass("is-invalid");
      $("#product-desc").removeClass("is-invalid");
      valid = true;
    }
    if (!$(".shortDesc").hasClass("d-none")) {
      if ($("#short-desc").val() === "") {
        $("#short-desc").addClass("is-invalid");
        valid = false;
      } else {
        $("#short-desc").removeClass("is-invalid");
        valid = true;
      }
    } else {
      $("#short-desc").removeClass("is-invalid");
    }
    let product = {};
    let url = "";
    if (valid) {
      if ($(event.target).attr("product_id") !== undefined) {
        url = process.env.REACT_APP_VercelUrl + "/machines/updatemachines";
        product = {
          id: $(event.target).attr("product_id"),
          title: $("#product-title").val(),
          image: image,
          Description: $("#product-desc").val(),
          Active: $("#isActive").is(":checked"),
        };
      } else {
        url = process.env.REACT_APP_VercelUrl + "/machines/savemachines";
        product = {
          title: $("#product-title").val(),
          image: image,
          Description: $("#product-desc").val(),
          Active: $("#isActive").is(":checked"),
        };
      }

      await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status > 199 && res.status < 300) {
          Swal.fire({
            icon: "success",
            title: "Product Saved Successfully!",
            showConfirmButton: true,
            timer: 2500,
          }).then(() => {
            $("#exampleModal").modal("hide");
          });
          getData();
        }
      });
    }
    // ...
    setSelectedFile(null);
    setPreviewUrl("");
    setImage("");
  }
  if (
    sessionStorage.getItem("IsLogin") !== null
      ? sessionStorage.getItem("IsLogin").toString() === "true"
      : false
  ) {
    return (
      <>
        <VpsMemberPortalHeader />
        <div className="d-grid gap-2 m-3 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={addProductModal}
          >
            Add Machine
          </button>
        </div>
        <div id="dataTable">
          <DataTable
            title="Product List"
            columns={columns}
            data={records}
            theme="dark"
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            // selectableRows
            // selectableRowsHighlight
            highlightOnHover
            // actions={
            //   <button className="btn btn-primary">Export</button>
            // }
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search here"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-25 form-control"
              />
            }
            subHeader={
              <input
                type="text"
                placeholder="Search here"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-15 form-control"
              />
            }
          />
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="col-form-label">
                      Machine Image:
                    </label>
                    <input
                      accept="image/"
                      type="file"
                      onChange={handleFileInputChange}
                    />
                    <button type="submit">Upload</button>
                  </div>
                  <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Image Preview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img
                        src={image}
                        alt="Preview"
                        style={{ width: "100%" }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleModalClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="col-form-label">
                      Machine Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-desc" className="col-form-label">
                      Machine Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="product-desc"
                    ></textarea>
                  </div>
                  {/* <div className="mb-3">
                    <input
                      type="checkbox"
                      id="isShow"
                      onChange={showShortDescription}
                      className="me-2"
                      name="fav_language"
                      value="Show on Slide?"
                    />
                    <label htmlFor="isShow">Show on Slide?</label>
                  </div> */}
                  {/* <div className="mb-3 shortDesc d-none">
                    <label htmlFor="short-desc" className="col-form-label">
                      Product Short Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="short-desc"
                    ></textarea>
                  </div> */}
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      id="isActive"
                      onChange={toggleSwitch}
                      className="me-2"
                      name="fav_language"
                      value="Active"
                    />
                    <label htmlFor="isActive">Active</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary saveBtn"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit"></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit secondDigit"></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit"></span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default AddMachines;

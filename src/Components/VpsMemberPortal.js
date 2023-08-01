import $ from "jquery";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import VpsMemberPortalHeader from "./VpsMemberPortalHeader";
import "../Style/memberLogin.css";
import DataTable from "react-data-table-component";
import { Buffer } from "buffer";
import Swal from "sweetalert2";

function VpsMemberPortal(props) {
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
  const [imageBlob, setImageBob] = useState([]);
  const [records, setRecords] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [paginationLinksHTML, setpaginationLinksHTML] = useState([]);
  var url =
    process.env.REACT_APP_VercelUrl +
    "/" +
    $("#product-types").children("option:selected").val() +
    "?page=1";
  var headers = {};
  useEffect(() => {
    url =
      searchVal !== ""
        ? process.env.REACT_APP_VercelUrl +
          "/" +
          $("#product-types").children("option:selected").val() +
          "" +
          `?title=` +
          searchVal
        : process.env.REACT_APP_VercelUrl +
          "/" +
          $("#product-types").children("option:selected").val() +
          "?page=1";
    getData();
    IsLogin =
      sessionStorage.getItem("IsLogin") !== null
        ? sessionStorage.getItem("IsLogin").toString()
        : false;
  }, [searchVal, totalRecord]);
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
      name: "Short Description",
      selector: (row) => row.ShortDescription,
      sortable: true,
    },
    {
      name: "Long Description",
      selector: (row) => row.LongDescription,
      sortable: true,
    },
    {
      name: "IsShow",
      selector: (row) =>
        row.IsShow !== undefined && row.IsShow !== null
          ? row.IsShow.toString()
          : "",
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
            className="btn btn-primary me-2 productEditBtn"
            id={row._id}
            title={row.title}
            product-type={row.productType}
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
            long_des={row.LongDescription}
            image={row.image}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            short_des={row.ShortDescription}
            specification1={row.Specification1}
            specification2={row.Specification2}
            specification3={row.Specification3}
            specification4={row.Specification4}
            specification5={row.Specification5}
            value1={row.Value1}
            value2={row.Value2}
            value3={row.Value3}
            value4={row.Value4}
            value5={row.Value5}
            onClick={editProduct}
          >
            Edit
          </button>
          <button
            className="btn btn-primary me-2 validateProduct"
            id={row._id}
            product-type={row.productType}
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
      .text("update")
      .attr("product_id", event.target.id);
      $("#exampleModal #specification1").val($('.productEditBtn').attr('specification1'));
      $("#exampleModal #specification2").val($('.productEditBtn').attr('specification2'));
      $("#exampleModal #specification3").val($('.productEditBtn').attr('specification3'));
      $("#exampleModal #specification4").val($('.productEditBtn').attr('specification4'));
      $("#exampleModal #specification5").val($('.productEditBtn').attr('specification5'));
      $("#exampleModal #value1").val($('.productEditBtn').attr('value1'));
      $("#exampleModal #value2").val($('.productEditBtn').attr('value2'));
      $("#exampleModal #value3").val($('.productEditBtn').attr('value3'));
      $("#exampleModal #value4").val($('.productEditBtn').attr('value4'));
      $("#exampleModal #value5").val($('.productEditBtn').attr('value5'));
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
        await fetch(
          process.env.REACT_APP_VercelUrl + "/"+$('.validateProduct').attr('product-type')+"/deactivateproducts",
          {
            method: "POST",
            body: JSON.stringify({
              id: event.target.id,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
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
    await fetch(
      process.env.REACT_APP_VercelUrl + "/"+$('.validateProduct').attr('product-type')+"/activateproducts",
      {
        method: "POST",
        body: JSON.stringify({
          id: event.target.id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
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
  const getProductsData = () => {
    setRecords([]);
    url =
      searchVal !== ""
        ? process.env.REACT_APP_VercelUrl +
          "/" +
          $("#product-types").children("option:selected").val() +
          "?title=" +
          searchVal
        : process.env.REACT_APP_VercelUrl +
          "/" +
          $("#product-types").children("option:selected").val() +
          "?page=1";
    getData();
  };
  const getData = async () => {
    const res = $('#product-types').children("option:selected").val() !== "" ? await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        setRecords(data.myData);
        setTotalRecord(data.nbHits);
        renderPaginationLinks();
      })
      .catch(function (error) {}) : "";
  };
  const renderPaginationLinks = () => {
    if (totalRecord > 0) {
      const paginationLinks = [];
      for (let index = 0; index < Math.ceil(totalRecord / 10); index++) {
        if (index === 0) {
          paginationLinks.push(
            <li className="page-item" key={index}>
              <button
                className="page-link numBtn firstButton active"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        } else if (index === Math.ceil(totalRecord / 10) - 1) {
          paginationLinks.push(
            <li className="page-item" key={index}>
              <button
                className="page-link numBtn lastButton"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        } else {
          paginationLinks.push(
            <li className="page-item numItems" key={index}>
              <button
                className="page-link numBtn"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        }
      }
      setpaginationLinksHTML(paginationLinks);
    }
  };
  const getPageData = (event) => {
    event.stopPropagation();
    $(".numBtn").removeClass("active");
    $(event.target).addClass("active");
    setCurrentPage(parseInt($(event.target).attr("pagenum")));
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      $("#product-types").children("option:selected").val() +
      "?page=" +
      $(event.target).attr("pagenum");
    getData();
    if ($(event.target).hasClass("firstButton")) {
      $(".previousBtn").addClass("disabled");
      $(".nextBtn").removeClass("disabled");
    } else if ($(event.target).hasClass("lastButton")) {
      $(".previousBtn").removeClass("disabled");
      $(".nextBtn").addClass("disabled");
    } else {
      $(".previousBtn").removeClass("disabled");
      $(".nextBtn").removeClass("disabled");
    }
  };
  const goToprevious = () => {
    var currentPage = parseInt($(".page-item .numBtn.active").attr("pagenum"));
    $(".page-item .numBtn").removeClass("active");
    $(".page-item .numBtn[pagenum=" + (currentPage - 1) + "]").addClass(
      "active"
    );
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      $("#product-types").children("option:selected").val() +
      "?page=" +
      (currentPage - 1);
    getData();
    if (
      $(".page-item .numBtn[pagenum=" + (currentPage - 1) + "]").hasClass(
        "firstButton"
      )
    ) {
      $(".previousBtn").addClass("disabled");
    }
    $(".nextBtn").removeClass("disabled");
  };
  const goToNext = () => {
    var currentPage = parseInt($(".page-item .numBtn.active").attr("pagenum"));
    $(".page-item .numBtn").removeClass("active");
    $(".page-item .numBtn[pagenum=" + (currentPage + 1) + "]").addClass(
      "active"
    );
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      $("#product-types").children("option:selected").val() +
      "?page=" +
      (currentPage + 1);
    getData();
    if (
      $(".page-item .numBtn[pagenum=" + (currentPage + 1) + "]").hasClass(
        "lastButton"
      )
    ) {
      $(".nextBtn").addClass("disabled");
    }
    $(".previousBtn").removeClass("disabled");
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
        // Base64 encoded string
        const base64String = reader.result;

        // Extract the content type and Base64 data from the string
        const contentType = base64String.slice(
          base64String.indexOf(":") + 1,
          base64String.indexOf(";")
        );
        const base64Data = base64String.slice(base64String.indexOf(",") + 1);
        // Decode the Base64 data
        const binaryData = window.atob(base64Data);
        // Create a Uint8Array from the binary data
        const uint8Array = new Uint8Array(binaryData.length);
        // Create a Blob object from the Uint8Array and content type
        const blob = new Blob([uint8Array], { type: contentType });
        for (let i = 0; i < binaryData.length; i++) {
          uint8Array[i] = binaryData.charCodeAt(i);
        }
        setImageBob(uint8Array);
      };
      reader.onerror = (error) => {};
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
        url =
          process.env.REACT_APP_VercelUrl +
          "/" +
          $("#product-type").children("option:selected").val() +
          "/updateproducts";
        product = {
          id: $(event.target).attr("product_id"),
          title: $("#product-title").val(),
          // image: image,
          // imageBlob:imageBlob,
          ShortDescription: $("#short-desc").val(),
          LongDescription: $("#product-desc").val(),
          Specification1: $("#specification1").val(),
          Value1: $("#value1").val(),
          Specification2: $("#specification2").val(),
          Value2: $("#value2").val(),
          Specification3: $("#specification3").val(),
          Value3: $("#value3").val(),
          Specification4: $("#specification4").val(),
          Value4: $("#value4").val(),
          Specification5: $("#specification5").val(),
          Value5: $("#value5").val(),
          IsShow: $("#isShow").is(":checked"),
          Active: $("#isActive").is(":checked"),
        };
      } else {
        url =
          process.env.REACT_APP_LocalUrl +
          "/" +
          $("#product-type").children("option:selected").val() +
          "/saveproducts";
        product = {
          title: $("#product-title").val(),
          image: image,
          // imageBlob:imageBlob,
          ShortDescription: $("#short-desc").val(),
          LongDescription: $("#product-desc").val(),
          Specification1: $("#specification1").val(),
          Value1: $("#value1").val(),
          Specification2: $("#specification2").val(),
          Value2: $("#value2").val(),
          Specification3: $("#specification3").val(),
          Value3: $("#value3").val(),
          Specification4: $("#specification4").val(),
          Value4: $("#value4").val(),
          Specification5: $("#specification5").val(),
          Value5: $("#value5").val(),
          IsShow: $("#isShow").is(":checked"),
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
            Add Product
          </button>
        </div>
        <div className="d-grid gap-2 m-3 d-md-flex justify-content-md-end">
          <select
            className="form-select"
            id="product-types"
            onChange={getProductsData}
          >
            <option value="">Select</option>
            <option value="bosch">Bosch</option>
            <option value="forte">Forte</option>
            <option value="sandhu">Sanshu</option>
            <option value="products">Great Yuva</option>
            <option value="dura">Dura Shine</option>
            <option value="heapro">Heapro</option>
            <option value="ralli">Ralli Wolf</option>
            <option value="star">Star Blaze</option>
            <option value="warpp">Warpp</option>
          </select>
        </div>
        <div id="dataTable">
          <DataTable
            title="Product List"
            columns={columns}
            data={records}
            theme="dark"
            pagination={false}
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
          <nav
            aria-label="Page navigation example"
            className="justify-content-center"
          >
            <ul className="pagination justify-content-center">
              <li className="page-item ">
                <button
                  className="page-link previousBtn disabled"
                  onClick={goToprevious}
                  tabIndex="-1"
                >
                  Previous
                </button>
              </li>
              {paginationLinksHTML}
              <li className="page-item">
                <button className="page-link nextBtn" onClick={goToNext}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
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
                    <label htmlFor="product-type" className="col-form-label">
                      Product Type:
                    </label>
                    <select id="product-type" className="form-control">
                      <option value="">Select</option>
                      <option value="bosch">Bosch</option>
                      <option value="forte">Forte</option>
                      <option value="sandhu">Sanshu</option>
                      <option value="products">Great Yuva</option>
                      <option value="dura">Dura Shine</option>
                      <option value="heapro">Heapro</option>
                      <option value="ralli">Ralli Wolf</option>
                      <option value="star">Star Blaze</option>
                      <option value="warpp">Warpp</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-title" className="col-form-label">
                      Product Image:
                    </label>
                    <input
                      accept="image/"
                      type="file"
                      onChange={handleFileInputChange}
                    />
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
                      Product Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product-title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product-desc" className="col-form-label">
                      Product Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="product-desc"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specification1" className="col-form-label">
                      Specification1:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specification1"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="value1" className="col-form-label">
                      Value1:
                    </label>
                    <input type="text" className="form-control" id="value1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specification2" className="col-form-label">
                      Specification2:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specification2"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="value2" className="col-form-label">
                      Value2:
                    </label>
                    <input type="text" className="form-control" id="value2" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specification3" className="col-form-label">
                      Specification3:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specification3"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="value3" className="col-form-label">
                      Value3:
                    </label>
                    <input type="text" className="form-control" id="value3" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specification4" className="col-form-label">
                      Specification4:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specification4"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="value4" className="col-form-label">
                      Value4:
                    </label>
                    <input type="text" className="form-control" id="value4" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specification5" className="col-form-label">
                      Specification5:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specification5"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="value5" className="col-form-label">
                      Value5:
                    </label>
                    <input type="text" className="form-control" id="value5" />
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      id="isShow"
                      onChange={showShortDescription}
                      className="me-2"
                      name="fav_language"
                      value="Show on Slide?"
                    />
                    <label htmlFor="isShow">Show on Slide?</label>
                  </div>
                  <div className="mb-3 shortDesc d-none">
                    <label htmlFor="short-desc" className="col-form-label">
                      Product Short Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="short-desc"
                    ></textarea>
                  </div>
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
      <div class="error">
        <div class="container-floud">
          <div class="col-xs-12 ground-color text-center">
            <div class="container-error-404">
              <div class="clip">
                <div class="shadow">
                  <span class="digit thirdDigit"></span>
                </div>
              </div>
              <div class="clip">
                <div class="shadow">
                  <span class="digit secondDigit"></span>
                </div>
              </div>
              <div class="clip">
                <div class="shadow">
                  <span class="digit firstDigit"></span>
                </div>
              </div>
              <div class="msg">
                OH!<span class="triangle"></span>
              </div>
            </div>
            <h2 class="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default VpsMemberPortal;

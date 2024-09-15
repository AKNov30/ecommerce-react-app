import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

function ProductPage() {
    const { id } = useParams<{ id: string }>();
    return (
      <>
        <div className="container-sm my-4">
          <div className="row">
            <div className="col-sm-6">
              <img
                className="figure-img img-fluid rounded"
                src="https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="fw-bold pt-3">
                <p>Stock (75/100)</p>
              </div>
              <div className="progress mbc">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  75%
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-3 col-12 border border-2 rounded">
                <h6 className="fw-bolder fs-5">Product: {id}</h6>
                <p className="fw-semibold fs-6">
                  ลวดลาย: มีลายขนเป็นแนวสลับสีคล้ายลายเสือซึ่งเป็นลักษณะเฉพาะของแท็บบี้
                  <br />
                  ตา: ดวงตาใหญ่และกลม สีตาดูเด่นชัด เป็นสีเขียวอ่อนหรือเหลืองที่มีความเป็นประกาย
                  <br />
                  ขน: ขนหนานุ่มและมีสีโทนสีน้ำตาลอ่อนและเข้มสลับกัน
                </p>
                <p className="m-0 fw-semibold">Price $2000</p>
                <label htmlFor="exampleDataList" className="form-label fw-semibold mb-1">
                  Quantity:
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Quantity"
                  aria-label=".form-control-sm example"
                />
                <Link to="/checkout" className="btn btn-primary mt-3">
                    Add to Cart
                </Link>
              </div>
              <ul className="list-group mt-3 col-12 border border-1 fw-semibold">
                <li className="list-group-item list-group-item-secondary" aria-current="true">
                  คุณสมบัติเด่น
                </li>
                <li className="list-group-item">สายพันธุ์: แท็บบี้ (Tabby)</li>
                <li className="list-group-item">ลักษณะนิสัย: เป็นมิตร, ช่างสำรวจ และขี้เล่น</li>
                <li className="list-group-item">อายุ: ประมาณ 2 ปี</li>
                <li className="list-group-item">
                  สุขภาพ: สุขภาพแข็งแรงและได้รับการตรวจสุขภาพเป็นประจำ
                </li>
                <li className="list-group-item">
                  วัคซีน: ได้รับวัคซีนพื้นฐาน เช่น วัคซีนป้องกันโรคพิษสุนัขบ้า วัคซีนป้องกันไข้หวัดแมว
                </li>
              </ul>
            </div>
          </div>
  
          <div className="col-lg-12">
            <ul className="list-group mt-3 col-12 border border-1 fw-semibold">
              <li className="list-group-item list-group-item-secondary" aria-current="true">
                Rate this Product
              </li>
              <li className="list-group-item d-flex py-3 align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    2
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    3
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="option4"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio4">
                    4
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="option5"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio5">
                    5
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Rating
                </button>
              </li>
            </ul>
          </div>
  
          <div className="col-lg-12">
            <ul className="list-group mt-3 col-12 border border-1 fw-semibold">
              <li className="list-group-item list-group-item-secondary" aria-current="true">
                Reviews
              </li>
              <li className="list-group-item py-2">
                <span className="fw-semibold">John Doe</span>
                <br />
                แมวตัวนี้น่ารักมาก! ขนของมันนุ่มและลวดลายชัดเจน ลายแท็บบี้ที่ละเอียดสวยงามทำให้มันดูน่ารักและสง่างามในเวลาเดียวกัน นิสัยของมันเป็นมิตรและชอบเล่น ชอบมานั่งตักและคลอเคลีย ถือว่าเป็นเพื่อนที่ดีมากๆ สำหรับคนที่ชอบสัตว์เลี้ยงที่มีความเป็นกันเอง
              </li>
              <li className="list-group-item py-2">
                <span className="fw-semibold">Jane Smith</span>
                <br />
                ผมชอบแมวตัวนี้มาก โดยเฉพาะดวงตาที่โตและมีประกาย ทำให้ดูมีชีวิตชีวา ขนของมันหนานุ่ม ลายแท็บบี้ก็โดดเด่นมาก มันเป็นแมวที่สงบและชอบมองสำรวจสภาพแวดล้อม นอกจากนี้ยังเข้ากับคนง่ายมาก ผมแนะนำแมวตัวนี้สำหรับคนที่กำลังมองหาแมวที่มีลักษณะโดดเด่นและเข้ากับคนได้ง่าย
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default ProductPage;
  
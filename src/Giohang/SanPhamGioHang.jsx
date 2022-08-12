import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
  render() {
    const {sanPham,themGioHang,xemChiTiet}=this.props;
    return (
      <div className="card text-white bg-white">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={200}/>
        <div className="card-body text-start">
          <h4 className="card-title text-danger">{sanPham.tenSP}</h4>
          <button className='btn btn-success'onClick={()=>xemChiTiet(sanPham)}>xem chi tiet</button>
          <button className="btn btn-danger mx-2"onClick={()=>themGioHang(sanPham)}>them gio hang</button>
        </div>
      </div>

    )
  }
}

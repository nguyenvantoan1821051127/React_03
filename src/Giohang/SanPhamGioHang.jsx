import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
  render() {
    const {sanPham,themGioHang,xemChiTiet}=this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={200}/>
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className='btn btn-primary'onClick={()=>xemChiTiet(sanPham)}>xem chi tiet</button>
          <button className="btn btn-danger"onClick={()=>themGioHang(sanPham)}>them gio hang</button>
        </div>
      </div>

    )
  }
}

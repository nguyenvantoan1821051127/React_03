import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang';
import DanhSachSanPham from './DanhSachSanPham';
import phoneData from '../data/phoneData.json'

export default class BaiTapGioHang extends Component {

  constructor(props){
    super(props);
    this.state={
      gioHang:[]
    }
  }
  //lay du lieu tai componenBai tap goi hang
  themGioHang=(sanPhamChon)=>{
    //b1:tu sp duoc chon tao ra sp gio hang
    let spGioHang={"maSP": sanPhamChon.maSP, 
    tenSP: sanPhamChon.tenSP,  
    giaBan: sanPhamChon.giaBan,
    hinhAnh: sanPhamChon.hinhAnh, 
    soLuong:1}
    //kiem tra spchon co trong gio hang chua
    var gioHangCapNhat=[...this.state.gioHang];
    let index=gioHangCapNhat.findIndex(sp=>sp.maSP===spGioHang.maSP);
    if(index !==-1){
      //san pham duoc click da co trong this.state.giohang
      gioHangCapNhat[index].soLuong+=1;
    }else{
      //san pham duoc click chua co trong this.state.giohang
      gioHangCapNhat.push(spGioHang);
    }


      this.setState({
        gioHang:gioHangCapNhat
      })
  }

  //dat su kien xoa gio hang tai BTGioHang
  xoaGioHang=(maSP)=>{
    //tim trong gio hang co sp chua maSP duoc click thi xoa
    // var gioHangCapNhat=[...this.state.gioHang];
    // let index=gioHangCapNhat.findIndex(sp=>sp.maSP===maSP);
    // if(index !== -1){
    //   gioHangCapNhat.splice(index,1);
    // }
    //cap nhat lai state gio hang render giao dien
    var gioHangCapNhat=this.state.gioHang.filter(sp=>sp.maSP !==maSP)
    this.setState({
      gioHang:gioHangCapNhat
    })
  }

  tangGiamSoLuong=(maSP,tangGiam)=> //tangGiam=== true:tang so luong,false giam so luong
    {
      var gioHangCapNhat=[...this.state.gioHang];
      let index=gioHangCapNhat.findIndex(sp=>sp.maSP===maSP);
      if(tangGiam){
        gioHangCapNhat[index].soLuong +=1;
      }
      else{
        if(gioHangCapNhat[index].soLuong>1){
          gioHangCapNhat[index].soLuong -=1;
        }
      }
      //cap nhat lai gia tri va render lai gio hang
      this.setState({
        gioHang:gioHangCapNhat
      })
    }
  render() {
    let tongSoLuong=this.state.gioHang.reduce((ts1,spGH,index)=>{
      return ts1 +=spGH.soLuong;
    },0)


    return (
      <div className='container'>
        <h3 className='text-center text-success'>Bai tap gio hang</h3>
        <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></ModalGioHang>
        <div className="text-right"><span className='text-danger' style={{cursor:'pointer',
        fontSize:'17px',fontWeight:"bold"}}data-bs-toggle="modal" data-bs-target="#modelId">Gio hang ({tongSoLuong})</span></div>
        <DanhSachSanPham mangSanPham={phoneData} themGioHang={this.themGioHang}></DanhSachSanPham>
        
      </div>
    )
  }
}

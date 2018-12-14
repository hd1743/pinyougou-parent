package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

//品牌服务层接口
public interface BrandService {

    //返回全部列表
    public List<TbBrand> findAll();

    //分页
    public PageResult findPage(int pageNum,int pageSize);


    //增加
    public void add(TbBrand brand);

    //根据ID查询实体
    public TbBrand findOne(Long id);

    //修改
    public void update(TbBrand brand);

    //删除
    public void delete(Long[] ids);

    //分页
    public PageResult findPage(TbBrand brand, int pageNum,int pageSize);
}

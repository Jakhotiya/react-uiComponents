const TreeData = {
  label: "Level 1",
  childNodes: [
    {
      label: "Level 2",
      childNodes: []
    },
    {
      label: "Level 2",
      childNodes: [
        {
          label: "Level 3",
          childNodes: []
        },
        {
          label: "Level 3",
          childNodes: []
        },
        {
          label: "Level 3",
          childNodes: []
        }
      ]
    }
  ]
};

const PageSizes = [
  { label: 20, value: 20 },
  { label: 40, value: 40 },
  { label: 80, value: 80 },
  { label: 100, value: 100 }
];


/**
 * 
 * Magento also has paging configurations associated with views
 * but for now we are going to skip them. It also has columns as object
 * of shape colname: {visible:boolean,sortable:false}. For now we are going
 * to keep it simple and have columns array which only contains visible columns
 */

const viewArray = [
  { index: 1, label: 'Default view', editable: false, data: {columns:[], positions: {}, filters: {} } },
  { index: 2, label: 'With Filters', editable: true, data: {columns:[],positions: {}, filters: {} }  },
  { index: 3, label: 'Changed Position', editable: true, data: {columns:[],positions: {}, filters: {} } },
]

const chips = [
  { index: 'entity_id', label: 'ID', value: { from: 20, to: 25 } }
];

const Columns = {
  entity_id: {
    index: "entity_id",
    label: "ID",
    isRange: true,
    rangeType: "text",
    sortOrder: 20,
    isVisible: true
  },
  sku: {
    index: "sku",
    label: "SKU",
    isRange: false,
    rangeType: "text",
    sortOrder: 40,
    isVisible: true
  },
  name: {
    index: "name",
    label: "Name",
    isRange: false,
    rangeType: "text",
    sortOrder: 60,
    isVisible: true
  },
  price: {
    index: "price",
    label: "Price",
    isRange: true,
    rangeType: "text",
    sortOrder: 80,
    isVisible: true
  },
  special_price: {
    index: "special_price",
    label: "Special Price",
    isRange: false,
    rangeType: "text",
    sortOrder: 100,
    isVisible: true
  },
  qty: {
    index: "qty",
    label: "Quantity",
    isRange: true,
    rangeType: "text",
    sortOrder: 60,
    isVisible: true
  },
  actions:{
    index:'actions',
    label:'Actions',
    isRange:false,
    isVisible:true
  }
};

const data = {
  totalRecords: 45,
  items: {
    "1": {
      entity_id: "1",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_1",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 1",
      thumbnail: "/6/c/6c8349cc7260ae62e3b1396831a8398f.jpg",
      url_key: "simple-product-1",
      price: "$5.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/6/c/6c8349cc7260ae62e3b1396831a8398f.jpg",
      thumbnail_alt: "Simple Product 1",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/1/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/6/c/6c8349cc7260ae62e3b1396831a8398f.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/1/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "2": {
      entity_id: "2",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_2",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 2",
      thumbnail: "/a/1/a1d0c6e83f027327d8461063f4ac58a6.jpg",
      url_key: "simple-product-2",
      price: "$1.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/a/1/a1d0c6e83f027327d8461063f4ac58a6.jpg",
      thumbnail_alt: "Simple Product 2",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/2/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/a/1/a1d0c6e83f027327d8461063f4ac58a6.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/2/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "3": {
      entity_id: "3",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_3",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 3",
      thumbnail: "/d/6/d67d8ab4f4c10bf22aa353e27879133c.jpg",
      url_key: "simple-product-3",
      price: "$1.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/d/6/d67d8ab4f4c10bf22aa353e27879133c.jpg",
      thumbnail_alt: "Simple Product 3",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/3/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/d/6/d67d8ab4f4c10bf22aa353e27879133c.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/3/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "4": {
      entity_id: "4",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_4",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 4",
      thumbnail: "/1/9/19ca14e7ea6328a42e0eb13d585e4c22.jpg",
      url_key: "simple-product-4",
      price: "$5.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Société Générale adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/1/9/19ca14e7ea6328a42e0eb13d585e4c22.jpg",
      thumbnail_alt: "Simple Product 4",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/4/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/1/9/19ca14e7ea6328a42e0eb13d585e4c22.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/4/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "5": {
      entity_id: "5",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_5",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 5",
      thumbnail: "/1/8/182be0c5cdcd5072bb1864cdee4d3d6e.jpg",
      url_key: "simple-product-5",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/1/8/182be0c5cdcd5072bb1864cdee4d3d6e.jpg",
      thumbnail_alt: "Simple Product 5",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/5/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/1/8/182be0c5cdcd5072bb1864cdee4d3d6e.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/5/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "6": {
      entity_id: "6",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_6",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 6",
      thumbnail: "/3/4/34173cb38f07f89ddbebc2ac9128303f.jpg",
      url_key: "simple-product-6",
      price: "$55.20",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/3/4/34173cb38f07f89ddbebc2ac9128303f.jpg",
      thumbnail_alt: "Simple Product 6",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/6/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/3/4/34173cb38f07f89ddbebc2ac9128303f.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/6/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "7": {
      entity_id: "7",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_7",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 7",
      thumbnail: "/0/2/02e74f10e0327ad868d138f2b4fdd6f0.jpg",
      url_key: "simple-product-7",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. ASDA Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/0/2/02e74f10e0327ad868d138f2b4fdd6f0.jpg",
      thumbnail_alt: "Simple Product 7",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/7/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/0/2/02e74f10e0327ad868d138f2b4fdd6f0.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/7/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "8": {
      entity_id: "8",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_8",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 8",
      thumbnail: "/1/f/1ff1de774005f8da13f42943881c655f.jpg",
      url_key: "simple-product-8",
      price: "$768.20",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Huawei BBVA Dell Macy's Morgan Stanley Telecom Italia Group Société Générale adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/1/f/1ff1de774005f8da13f42943881c655f.jpg",
      thumbnail_alt: "Simple Product 8",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/8/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/1/f/1ff1de774005f8da13f42943881c655f.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/8/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "9": {
      entity_id: "9",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_9",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 9",
      thumbnail: "/3/c/3c59dc048e8850243be8079a5c74d079.jpg",
      url_key: "simple-product-9",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/3/c/3c59dc048e8850243be8079a5c74d079.jpg",
      thumbnail_alt: "Simple Product 9",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/9/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/3/c/3c59dc048e8850243be8079a5c74d079.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/9/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "10": {
      entity_id: "10",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_10",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 10",
      thumbnail: "/6/f/6f4922f45568161a8cdf4ad2299f6d23.jpg",
      url_key: "simple-product-10",
      price: "$640.10",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Sumitomo Telstra Sky adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/6/f/6f4922f45568161a8cdf4ad2299f6d23.jpg",
      thumbnail_alt: "Simple Product 10",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/10/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/6/f/6f4922f45568161a8cdf4ad2299f6d23.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/10/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "11": {
      entity_id: "11",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_11",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 11",
      thumbnail: "/9/b/9bf31c7ff062936a96d3c8bd1f8f2ff3.jpg",
      url_key: "simple-product-11",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Honeywell SK Group Canon Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/9/b/9bf31c7ff062936a96d3c8bd1f8f2ff3.jpg",
      thumbnail_alt: "Simple Product 11",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/11/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/9/b/9bf31c7ff062936a96d3c8bd1f8f2ff3.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/11/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "12": {
      entity_id: "12",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_12",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 12",
      thumbnail: "/c/2/c20ad4d76fe97759aa27a0c99bff6710.jpg",
      url_key: "simple-product-12",
      price: "$68.40",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Société Générale adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/c/2/c20ad4d76fe97759aa27a0c99bff6710.jpg",
      thumbnail_alt: "Simple Product 12",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/12/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/c/2/c20ad4d76fe97759aa27a0c99bff6710.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/12/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "13": {
      entity_id: "13",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_13",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 13",
      thumbnail: "/4/5/45c48cce2e2d7fbdea1afc51c7c6ad26.jpg",
      url_key: "simple-product-13",
      price: "$446.30",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Renault Gillette MetLife Kellogg's Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/4/5/45c48cce2e2d7fbdea1afc51c7c6ad26.jpg",
      thumbnail_alt: "Simple Product 13",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/13/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/4/5/45c48cce2e2d7fbdea1afc51c7c6ad26.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/13/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "14": {
      entity_id: "14",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_14",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 14",
      thumbnail: "/1/6/1679091c5a880faf6fb5e6087eb1b2dc.jpg",
      url_key: "simple-product-14",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. ASDA adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/1/6/1679091c5a880faf6fb5e6087eb1b2dc.jpg",
      thumbnail_alt: "Simple Product 14",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/14/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/1/6/1679091c5a880faf6fb5e6087eb1b2dc.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/14/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "15": {
      entity_id: "15",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_15",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 15",
      thumbnail: "/e/c/eccbc87e4b5ce2fe28308fd9f2a7baf3.jpg",
      url_key: "simple-product-15",
      price: "$5.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/e/c/eccbc87e4b5ce2fe28308fd9f2a7baf3.jpg",
      thumbnail_alt: "Simple Product 15",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/15/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/e/c/eccbc87e4b5ce2fe28308fd9f2a7baf3.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/15/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "16": {
      entity_id: "16",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_16",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 16",
      thumbnail: "/f/8/f899139df5e1059396431415e770c6dd.jpg",
      url_key: "simple-product-16",
      price: "$9.99",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. China State Construction Gazprom Capital One VISA Huawei BBVA NBC International Dell Macy's DirecTV Morgan Stanley Telecom Italia Group Sainsbury's Société Générale adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/f/8/f899139df5e1059396431415e770c6dd.jpg",
      thumbnail_alt: "Simple Product 16",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/16/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/f/8/f899139df5e1059396431415e770c6dd.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/16/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "17": {
      entity_id: "17",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_17",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 17",
      thumbnail: "/e/2/e2ef524fbf3d9fe611d5a8e90fefdc9c.jpg",
      url_key: "simple-product-17",
      price: "$676.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Ping An Petronas Bosch Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/e/2/e2ef524fbf3d9fe611d5a8e90fefdc9c.jpg",
      thumbnail_alt: "Simple Product 17",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/17/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/e/2/e2ef524fbf3d9fe611d5a8e90fefdc9c.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/17/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "18": {
      entity_id: "18",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_18",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 18",
      thumbnail: "/f/4/f4b9ec30ad9f68f89b29639786cb62ef.jpg",
      url_key: "simple-product-18",
      price: "$1.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. TimeWarner E.ON adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/f/4/f4b9ec30ad9f68f89b29639786cb62ef.jpg",
      thumbnail_alt: "Simple Product 18",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/18/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/f/4/f4b9ec30ad9f68f89b29639786cb62ef.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/18/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "19": {
      entity_id: "19",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_19",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 19",
      thumbnail: "/5/4/54229abfcfa5649e7003b83dd4755294.jpg",
      url_key: "simple-product-19",
      price: "$5.00",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Itaú Facebook Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/5/4/54229abfcfa5649e7003b83dd4755294.jpg",
      thumbnail_alt: "Simple Product 19",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/19/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/5/4/54229abfcfa5649e7003b83dd4755294.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/19/",
          label: "Edit",
          hidden: false
        }
      }
    },
    "20": {
      entity_id: "20",
      attribute_set_id: "11",
      type_id: "simple",
      sku: "product_dynamic_20",
      has_options: "0",
      required_options: "0",
      created_at: "2017-11-09 05:39:51",
      updated_at: "2017-11-09 05:39:51",
      qty: "100500.0000",
      name: "Simple Product 20",
      thumbnail: "/2/a/2a38a4a9316c49e5a833517c45d31070.jpg",
      url_key: "simple-product-20",
      price: "$430.50",
      weight: "1.0000",
      status: "1",
      visibility: "4",
      tax_class_id: "2",
      short_description:
      "Experiences slopes stepped curious Darwin. Time Warner Cable Starbucks Sumitomo Telstra Sky Société Générale adidas Eni Caterpillar Johnson Scotiabank Mizuho",
      websites: "Main Website",
      thumbnail_src:
      "https://mage.dev/media/catalog/product/cache/fd4c882ce4b945a790b629f572e4ef93/2/a/2a38a4a9316c49e5a833517c45d31070.jpg",
      thumbnail_alt: "Simple Product 20",
      thumbnail_link: "https://mage.dev/admin/catalog/product/edit/id/20/",
      thumbnail_orig_src:
      "https://mage.dev/media/catalog/product/cache/8b5c625fb692b8dde426740670a5d3db/2/a/2a38a4a9316c49e5a833517c45d31070.jpg",
      actions: {
        edit: {
          href: "https://mage.dev/admin/catalog/product/edit/id/20/",
          label: "Edit",
          hidden: false
        }
      }
    }
  }
};

export { TreeData, data, Columns, chips, PageSizes, viewArray };

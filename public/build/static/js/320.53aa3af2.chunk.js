"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[320],{4320:function(e,_,t){t.r(_);var s=t(4165),n=t(5861),r=t(885),a=t(2791),o=t(5617),l=t(6165),i=t.n(l),c=t(7739),u=t(7698),m=t(184);_.default=function(){var e=(0,a.useState)(""),_=(0,r.Z)(e,2),t=_[0],l=_[1],d=(0,a.useState)(""),p=(0,r.Z)(d,2),E=p[0],g=p[1],x=(0,a.useState)(!1),b=(0,r.Z)(x,2),h=b[0],D=b[1],f=(0,a.useState)(!1),O=(0,r.Z)(f,2),M=O[0],P=O[1],j=(0,a.useState)(!1),v=(0,r.Z)(j,2),C=v[0],y=v[1],R=(0,a.useRef)(null),T=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var _,t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),l(""),_={model:"gpt-3.5-turbo",messages:[{role:"user",content:R.current.value+". If what is writtenhas nothing to do with food, ingredients or recipes in particular and there is a lack of context in ingredients, food or recipes, do not reply to me. And message me back. Try again to write something related to food, ingredients or recipes! Don't answer if it's not related to the topic I told you!.  "}]},e.next=5,(0,o.wm)(c.hr,_);case 5:t=e.sent,n=t.data,console.log(n),l(n.choices[0].message.content),P(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:" w-[350px] sm:w-[500px] md:w-[650px] mx-auto mt-[50px]",children:[(0,m.jsx)("h2",{className:" text-3xl font-bold tracking-tight text-gray-900 \r text-center m-4 mb-4",children:"Personal Recipe Creator "}),(0,m.jsx)("p",{className:"text-center  text-[17px] mt-3\r text-gray-600 mb-[30px]",children:"A possible way to create a recipe from ingredients only using artificial intelligence is to use a machine learning model that analyzes the ingredients and generates a title, a list of ingredients and cooking instructions. The model uses visual features extracted from the image of the dish and common ingredient combinations from recipe databases. The model can adapt the recipe to the type of dish that one wants to prepare, for example: bread, cake or cookie. The model can also invent new recipes that do not exist on the internet yet."}),(0,m.jsx)("label",{className:"text-[17px] ",children:"Enter ingredients or cuisine type to generate recipe:"}),(0,m.jsx)("textarea",{className:"block w-full p-4  rounded-md border-2 border-gray-600 mt-2 ",onChange:function(e){var _=e.target.value;g(_)},rows:5,ref:R,type:"text"}),(0,m.jsxs)("div",{className:"my-4",hidden:!!M,children:[(0,m.jsx)("button",{class:"btn btn-outline btn-success mr-4",disabled:""==E||h?"disabled":"",onClick:function(){D(!0),T()},children:"GENERATE"}),(0,m.jsx)("button",{onClick:function(){y(!0)},children:(0,m.jsx)("label",{disabled:h?"":"disabled",htmlFor:"my-modal-3",className:"btn btn-outline btn-warning",children:"Add to Favorit"})})]}),M?(0,m.jsx)("button",{className:"btn loading mt-3 ml-2",children:"loading"}):(0,m.jsx)("div",{className:"block p-4  w-full text-black rounded-md border-2 border-gray-600 mt-2 mb-[70px]",children:(0,m.jsxs)("pre",{style:{overflow:"auto",whiteSpace:"pre-wrap",fontFamily:"sans-serif",color:"darkblue"},children:[(0,m.jsx)(i(),{options:{strings:t,autoStart:!0,delay:30}}),":"]})}),(0,m.jsx)(u.Z,{open:C,setOpen:y,recipeString:t})]})}},7698:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1413),C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(4165),C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5861),C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(885),C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2860),axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1044),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2791),react_hook_form__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1134),react_tailwindcss_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8338),_constant_constant__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7739),_services_services__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5617),_shared_components_modalAddRecipe__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3458),_shared_components_modalLoading__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2568),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(184),optionsRating=[{value:"0",label:" \u2733\u2733\u2733\u2733\u2733\u2733"},{value:"1",label:"\u2b50 "},{value:"2",label:"\u2b50\u2b50 "},{value:"3",label:"\u2b50\u2b50\u2b50 "},{value:"4",label:"\u2b50\u2b50\u2b50\u2b50 "},{value:"5",label:"\u2b50\u2b50\u2b50\u2b50\u2b50 "}];function ModalGpt(_ref){var open=_ref.open,setOpen=_ref.setOpen,recipeString=_ref.recipeString,fileR=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState2=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState,2),selected=_useState2[0],setSelected=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState4=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState3,2),rating=_useState4[0],setRating=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState6=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState5,2),options=_useState6[0],setOptions=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState8=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState7,2),recipeObj=_useState8[0],setRecipeObj=_useState8[1],_useState9=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),_useState10=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState9,2),data2=_useState10[0],setData2=_useState10[1],_useState11=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState12=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState11,2),openMR=_useState12[0],setOpenMR=_useState12[1],_useState13=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState14=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_useState13,2),openML=_useState14[0],setOpenML=_useState14[1],formRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useForm=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.cI)(),register=_useForm.register,handleSubmit=_useForm.handleSubmit,errors=_useForm.formState.errors;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){doApiCat()}),[]);var doApiCat=function(){var e=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().mark((function e(){var _,t,s;return(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_services_services__WEBPACK_IMPORTED_MODULE_4__.R1)(_constant_constant__WEBPACK_IMPORTED_MODULE_3__.A5);case 2:_=e.sent,t=_.data,s=t.map((function(e){for(var _ in e)"name"===_&&(e.label=e.name,delete e.name),"url_code"===_&&(e.value=e.url_code,delete e.url_code),delete e._id;return e})),console.log(s),setOptions(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleChangeCategory=function(e){console.log("value:",e),setSelected(e)},handleChangeRating=function(e){console.log("value:",e),setRating(e)},uploadFile=function(){var e=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().mark((function e(_){var t,s,n;return(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setOpen(!1),setOpenML(!0),(t=new FormData).append("file",fileR.current.files[0]),t.append("upload_preset",_constant_constant__WEBPACK_IMPORTED_MODULE_3__.VV),console.log(fileR.current.files[0]),e.prev=6,e.next=9,axios__WEBPACK_IMPORTED_MODULE_0__.ZP.post("https://api.cloudinary.com/v1_1/dzchbifhx/image/upload",t);case 9:s=e.sent,n=s.data,console.log(n.secure_url),n.secure_url&&(_.img_url=n.secure_url,console.log(_),createRecipe(_)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(_){return e.apply(this,arguments)}}(),createRecipe=function(){var _ref4=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().mark((function _callee3(_recipe){var body,_yield$apiPostGPT,data,fullRecipe;return(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return setData2(""),body={model:"gpt-3.5-turbo",messages:[{role:"user",content:recipeString+'take this recipe and give me in object by this modele  name: {\n                type: String\n            },\n            description: {\n                type: String\n            },\n            ingredients: {\n                type: Array\n            },\n            category: {\n                type: String\n            },\n            content: {\n                type: String\n            },\n         \n          \n            "  dont return the model gust the recipe object'}]},_context3.next=4,(0,_services_services__WEBPACK_IMPORTED_MODULE_4__.wm)(_constant_constant__WEBPACK_IMPORTED_MODULE_3__.hr,body);case 4:_yield$apiPostGPT=_context3.sent,data=_yield$apiPostGPT.data,fullRecipe=eval("("+data.choices[0].message.content+")"),fullRecipe.img_url=_recipe.img_url,fullRecipe.info=fullRecipe.content,fullRecipe.category=_recipe.category,fullRecipe.subCategory=selected,fullRecipe.rating=rating.value,delete fullRecipe.content,console.log(fullRecipe),setRecipeObj(fullRecipe),dispatchDB(fullRecipe);case 16:case"end":return _context3.stop()}}),_callee3)})));return function(e){return _ref4.apply(this,arguments)}}(),dispatchDB=function(){var e=(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().mark((function e(_){var t,s;return(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_services_services__WEBPACK_IMPORTED_MODULE_4__.sg)(_constant_constant__WEBPACK_IMPORTED_MODULE_3__.JL,_);case 3:t=e.sent,s=t.data,console.log(s),setOpenML(!1),setOpenMR(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(_){return e.apply(this,arguments)}}();function handleReset(){formRef.current.reset(),setSelected(null),setRating(null),(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_12__.Z)("fileR")}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"checkbox",id:"my-modal-3",checked:open,className:"modal-toggle"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"modal",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"modal-box relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"btn btn-sm btn-circle absolute right-2 top-2",onClick:function(){setOpen(!1),handleReset()},children:"X"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3",{className:"text-lg font-bold",children:"Congratulations random Internet user!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"py-4",children:"You've been selected for a chance to get one year of subscription to use Wikipedia for free!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form",{onSubmit:handleSubmit(uploadFile),ref:formRef,className:"mt-8 space-y-6 ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"my-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{for:"countries",className:"text-gray-500 font-normal text-[15px] ",children:"Select your Category"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select",(0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.Z)((0,C_Users_user_Documents_singalovski_cooking_blog_client_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_13__.Z)({id:"countries"},register("category",{required:!0})),{},{className:"mt-2 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option",{value:""}),options.map((function(e,_){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option",{value:e.value,children:e.label},_)}))]})),errors.category&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:"text-red-600",children:"Please select a category"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:"text-gray-500 font-normal mt-3 text-[15px]",children:"Select Sub Category:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"mt-2 mb-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_tailwindcss_select__WEBPACK_IMPORTED_MODULE_2__.Z,{primaryColor:"default",value:selected,onChange:handleChangeCategory,options:options,isMultiple:!0,isSearchable:!0,onSearchInputChange:function(e){console.log("value:",e.target.value)}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:"text-gray-500 font-normal mt-1 text-[15px]",children:"Select a Rating:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"my-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_tailwindcss_select__WEBPACK_IMPORTED_MODULE_2__.Z,{value:rating,onChange:handleChangeRating,options:optionsRating})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"flex flex-col ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:"text-gray-500   font-normal text-[15px] my-2",children:"Product Image:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label",{className:"block mb-[36px] mt-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{className:"sr-only",children:"Choose profile photo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"file",ref:fileR,className:"block w-full text-sm text-gray-500\r file:mr-4 file:py-2 file:px-4\r file:rounded-full file:border-0\r file:text-sm file:font-semibold\r file:bg-slate-100 file:text-gray-500\r hover:file:bg-slate-400\r "})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"submit",className:"btn btn-outline",children:"Create"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_components_modalLoading__WEBPACK_IMPORTED_MODULE_6__.Z,{open:openML,setOpen:setOpenML}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_components_modalAddRecipe__WEBPACK_IMPORTED_MODULE_5__.Z,{open:openMR,setOpen:setOpenMR,data:recipeObj,grayButtonText:"Cancel",href:"/"})]})}__webpack_exports__.Z=ModalGpt},3458:function(e,_,t){t.d(_,{Z:function(){return o}});var s=t(2791),n=t(3793),r=t(9593),a=t(184);function o(e){var _,t=e.open,o=e.setOpen,l=(e.href,e.grayButtonText),i=e.data,c=(0,s.useRef)(null);return(0,a.jsx)(n.u.Root,{show:t,as:s.Fragment,children:(0,a.jsxs)(r.V,{as:"div",className:"relative z-10",initialFocus:c,onClose:o,children:[(0,a.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(r.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:m-4",children:[(0,a.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ",children:(0,a.jsx)("div",{className:"flex items-center justify-center ",children:i&&(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex flex-col  justify-center items-center   mt-[20px] mb-[20px]",children:[(0,a.jsx)("h2",{className:"  text-3xl font-bold tracking-tight text-green-600 text-center",children:" Created successfully"}),(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("img",{src:i.img_url,className:"rounded-3xl  w-[300px]",alt:""})}),(0,a.jsx)("h2",{className:"text-[26px]",children:i.name}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsxs)("div",{className:"hidden sm:block",children:[(0,a.jsx)("h2",{className:"mt-1",children:"Description"}),(0,a.jsx)("p",{className:"w-[300px] md:w-[450px] mb-4 text-[15px]  text-gray-600",children:i.description})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h2",{className:"mt-1",children:"Category"}),(0,a.jsx)("p",{className:"mb-4 ",children:i.category}),(0,a.jsx)("h2",{className:"mt-1",children:"Cooking Info"}),(0,a.jsx)("p",{className:"w-[300px] md:w-[450px] mb-4 text-[15px]  text-gray-600",children:i.info})]}),(0,a.jsxs)("p",{className:"text-[15px]  text-gray-600 mb-1",children:["Sourc: ",(0,a.jsx)("span",{children:i.url_site})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mb-1",children:"Ingredients"}),(0,a.jsx)("ul",{className:"",children:null===(_=i.ingredients)||void 0===_?void 0:_.map((function(e,_){return(0,a.jsxs)("div",{children:[(0,a.jsx)("hr",{}),(0,a.jsx)("li",{className:"text-[15px] pl-2 p-1 text-gray-600 ",children:e})]},_)}))})]})]})]})})})}),(0,a.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:(0,a.jsx)("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){o(!1)},ref:c,children:l})})]})})})})]})})}},2568:function(e,_,t){t.d(_,{Z:function(){return o}});var s=t(2791),n=t(3793),r=t(9593),a=t(184);function o(e){var _=e.open,t=e.setOpen,o=(0,s.useRef)(null);return(0,a.jsx)(n.u.Root,{show:_,as:s.Fragment,children:(0,a.jsxs)(r.V,{as:"div",className:"relative z-10",initialFocus:o,onClose:t,children:[(0,a.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(n.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsx)(r.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:(0,a.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,a.jsx)("div",{className:"sm:flex sm:items-start",children:(0,a.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,a.jsx)(r.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:"https://media.tenor.com/p1px63RmzGEAAAAC/cinnamon-rolls-sending-virtual-hug.gif",alt:"loading"})})})]})})})})})})})]})})}}}]);
//# sourceMappingURL=320.53aa3af2.chunk.js.map
import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useBody_ContainerCb, useFlex14Cb, useFlex15Cb, useFlex16Cb, useFlex17Cb, useFlex18Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useFlex24Cb, useFlex26Cb, useFlex25Cb, useFlex29Cb, useFlex30Cb, useFlex31Cb, useFlex44Cb, useFlex49Cb, useFlex52Cb, useFlex57Cb, useFlex58Cb, useFlex59Cb, useFlex60Cb, useFlex62Cb, useFlex63Cb, useFlex64Cb, useFlex65Cb, useFlex66Cb, useFlex67Cb, useFlex68Cb, useFlex69Cb, useFlex70Cb, useFlex71Cb, useFlex72Cb, useFlex73Cb, useFlex74Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex86Cb, useDropdown1Cb, useImage2Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useImage3Cb, useTextBox9Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useImage4Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useImage16Cb, useImage12Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useImage15Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useImage18Cb, useTextBox63Cb, useTextBox64Cb, useTextBox65Cb, useTextBox66Cb, useImage20Cb, useTextBox71Cb, useTextBox73Cb, useImage21Cb, useTextBox74Cb, useImage22Cb, useTextBox76Cb, useImage23Cb, useTextBox78Cb, useImage24Cb, useTextBox82Cb, useTextBox85Cb, useImage25Cb, useTextBox87Cb, useImage26Cb, useTextBox88Cb, useTextBox89Cb, useImage27Cb, useTextBox90Cb, useTextBox91Cb, useImage28Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useTextBox95Cb, useTextBox96Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useImage29Cb, useTextBox101Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Body_ContainerProps = useStore((state)=>state["Home"]["Body_Container"]);
const Body_ContainerIoProps = useIoStore((state)=>state["Home"]["Body_Container"]);
const Body_ContainerCb = useBody_ContainerCb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Dropdown1Props = useStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1IoProps = useIoStore((state)=>state["Home"]["Dropdown1"]);
const Dropdown1Cb = useDropdown1Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()

  return (<>
  <Flex className="p-Home Body_Container" {...Body_ContainerProps} {...Body_ContainerCb} {...Body_ContainerIoProps}>
<Flex className="p-Home Flex14" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-Home Flex15" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image className="p-Home Image2" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<Flex className="p-Home Flex16" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<TextBox className="p-Home TextBox5" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
<Flex className="p-Home Flex17" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox6" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Flex className="p-Home Flex18" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home TextBox7" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
<Dropdown className="p-Home Dropdown1" {...Dropdown1Props} {...Dropdown1Cb} {...Dropdown1IoProps}/>
<Flex className="p-Home Flex21" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image3" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex22" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox9" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-Home TextBox10" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox11" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex>
<Flex className="p-Home Flex23" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<TextBox className="p-Home TextBox12" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex className="p-Home Flex24" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex className="p-Home Flex25" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox className="p-Home TextBox13" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox16" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox15" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex className="p-Home Flex26" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Image className="p-Home Image4" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex29" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex className="p-Home Flex30" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox className="p-Home TextBox17" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox18" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox className="p-Home TextBox19" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox20" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Flex className="p-Home Flex31" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image16" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex44" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-Home Flex49" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox46" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox47" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox49" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox48" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex>
<Image className="p-Home Image12" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
<Flex className="p-Home Flex52" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex className="p-Home Flex57" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox58" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox60" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Flex>
<Image className="p-Home Image15" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
<Flex className="p-Home Flex58" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox62" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
<Flex className="p-Home Flex59" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex60" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox63" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox className="p-Home TextBox64" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox65" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox66" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Image className="p-Home Image20" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
<Image className="p-Home Image18" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
<Flex className="p-Home Flex62" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox71" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox73" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
<Flex className="p-Home Flex63" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Flex className="p-Home Flex64" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Image className="p-Home Image21" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox74" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
<Flex className="p-Home Flex65" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image className="p-Home Image22" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home TextBox76" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
<Flex className="p-Home Flex66" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image23" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home TextBox78" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex67" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex68" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Image className="p-Home Image24" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox82" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
<Flex className="p-Home Flex69" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image className="p-Home Image25" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox85" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
<Flex className="p-Home Flex70" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Image className="p-Home Image26" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox87" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex71" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox88" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox89" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
<Flex className="p-Home Flex72" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex className="p-Home Flex73" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox90" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox className="p-Home TextBox91" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Flex>
<Image className="p-Home Image27" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<Flex className="p-Home Flex74" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex className="p-Home Flex75" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox className="p-Home TextBox92" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox className="p-Home TextBox93" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex>
<Image className="p-Home Image28" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home Flex76" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox className="p-Home TextBox94" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<TextBox className="p-Home TextBox95" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<TextBox className="p-Home TextBox96" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
<Flex className="p-Home Flex77" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex className="p-Home Flex78" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image className="p-Home Image29" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home TextBox100" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox99" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox98" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox101" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
<Flex className="p-Home Flex86" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<TextBox className="p-Home TextBox104" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox105" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox106" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox108" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox className="p-Home TextBox109" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox110" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox111" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}

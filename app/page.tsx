"use client";
import Image from "next/image";
import {useEffect} from "react";
import './fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Marquee from "react-fast-marquee";
import {Link as Scroll} from 'react-scroll';
import {A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

const thisYear = new Date().getFullYear();

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <header>
        <Scroll className="transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0" to="main-contents" smooth={true} offset={-50}>Skip to main contents</Scroll>
        <nav className="z-30 fixed left-0 top-0 flex justify-between items-start p-4 xl:font-bold pointer-events-none">
          <Scroll to="home" smooth={true} offset={-50} className="cursor-pointer w-2/3 xl:w-1/4 pointer-events-auto"><Image
            src="/others/logo.webp"
            alt="Usaneko Logo"
            width={1016}
            height={279}
            className="w-full h-auto"
            priority
          /></Scroll>
          <div className="flex ms-auto">
            <div className="text-stone-900 hidden xl:flex text-base pointer-events-auto">
              <Scroll to="about" smooth={true} offset={-50} className="ps-10 pe-8 py-4 rounded-s-full border-white border-s-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">About</Scroll>
              <Scroll to="videos" smooth={true} offset={-50} className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">Videos</Scroll>
              <Scroll to="link" smooth={true} offset={-50} className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">Link</Scroll>
              <Scroll to="history" smooth={true} offset={-50} className="px-8 py-4 border-white border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">History</Scroll>
              <Scroll to="guideline" smooth={true} offset={-50} className="ps-8 pe-10 py-4 rounded-e-full border-white border-e-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">Guideline</Scroll>
            </div>
            <div className="ms-6 flex text-stone-900 text-xs xl:text-base pointer-events-auto">
              <button type="button" className="ps-3 pe-2 py-1 xl:ps-5 xl:pe-3 xl:py-4 rounded-s-full border-white border-s-2 border-y-2 cursor-pointer text-white bg-rose-500 bg-opacity-75">JP</button>
              <button type="button" className="ps-2 pe-3 py-1 xl:ps-3 xl:pe-5 xl:py-4 rounded-e-full border-white border-e-2 border-y-2 bg-white bg-opacity-75 cursor-pointer hover:text-white hover:bg-rose-500 hover:bg-opacity-75">EN</button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-contents" className="w-full flex flex-col items-center">

        <div id="home" className="overflow-hidden relative w-full h-svh xl:h-svh">
          <div className="relative w-[400svw] left-[-150svw] xl:left-0 xl:w-full h-full">
            <div className="z-10 absolute w-full h-svh bg-gradient-to-b from-transparent from-40% xl:from-60% to-stone-900"></div>
            <video className="z-0 absolute -mt-14 video xl:w-full xl:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full" src="/others/kagura.mp4" autoPlay muted playsInline loop/>
            <div className="z-20 absolute ps-[3vw] w-full bottom-14 whitespace-nowrap text-center text-[6vw] font-slogan">知のフロンティアは、ここにある。</div>
          </div>
        </div>

        <section id="about" className="bg-maze w-full">
          <div className="relative bg-gradient-to-b from-stone-600 from-60%">
            <div className="z-0 absolute top-40 xl:top-28 overflow-hidden w-full">
              <Marquee><span className="z-0 inline-block font-bold text-stone-500/75 text-[50vw] xl:text-[15vw]">Usaneko Large</span></Marquee>
            </div>
            <div className="z-10 relative flex flex-col xl:flex-row justify-center items-center">
              <aside className="self-start text-center w-full xl:w-auto">
                <Image
                  src="/others/full-body-transparent.webp"
                  alt="Usaneko Large"
                  className="object-contain mt-10 xl:mt-40 mx-auto"
                  width={300}
                  height={600}
                  priority
                />
              </aside>
              <section className="px-10 xl:px-14 py-14 text-base">
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">About</div>
                    <div className="text-sm text-rose-300">うさねこらーじとは？</div>
                  </div>
                  <div className="mb-28 leading-loose">
                    <p className="font-slogan text-center text-3xl xl:text-5xl">うさねこらーじ</p>
                    <p className="font-slogan text-center mb-14">Usaneko Large</p>
                    <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">「セキュリティホールから、こんばんらーじ！」</p>
                    <p className="mb-14">22才、東大卒、新人セキュリティスペシャリストVTuber。<br/>
                      本性はポンコツ。配信ではもっぱらイジられたりツッコまれたりしている。東大卒らしい威厳は一切ない。<br/>
                      下ネタとエロをこよなく愛する。ガチ恋勢を増やすべく策略を練っている。しかし、定期的にガチ恋を葬り去るような言動をする。<br/>
                      配信をつうじて様々な経験をして、みなさんと一緒に成長していきます！</p>
                  </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Contents</div>
                    <div className="text-sm text-rose-300">配信内容</div>
                  </div>
                  <div className="mb-28 leading-loose xl:max-w-screen-sm xl:mx-auto">
                    <ul className="list-disc ps-5">
                      <li>企画ものフリートーク(「自分のエロ漫画を描く」など)</li>
                      <li>CTF (Hack the BoxやpicoCTFなど)</li>
                      <li>競技プログラミング (AtCoderなど)</li>
                      <li>Webプログラミング (ISUCONなど)</li>
                      <li>資格試験の勉強 (IPA資格など)</li>
                    </ul>
                  </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Profile</div>
                    <div className="text-sm text-rose-300">プロフィール</div>
                  </div>
                  <div className="mb-28 leading-loose align-top xl:max-w-screen-sm xl:mx-auto">
                    <table>
                      <tbody>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">誕生日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="12/31">12月31日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">初配信日</td>
                        <td className="pb-4 align-top">
                          <time dateTime="2023/07/02">2023年7月2日</time>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">身長</td>
                        <td className="pb-4 align-top">だいたい170cm</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">イラストレーター</td>
                        <td className="pb-4 align-top">覡あおひ</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">モデラー</td>
                        <td className="pb-4 align-top">うなぬん(2D) / N(3D)</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ファンネーム</td>
                        <td className="pb-4 align-top">うさねこリスナー</td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 pb-4 align-top">ハッシュタグ</td>
                        <td className="pb-4 align-top">
                          配信タグ: <a href="https://x.com/hashtag/usanekoxlarge" target="_blank" rel="noopener noreferrer">#usanekoxlarge</a> <br/>
                          ファンアートタグ: <a href="https://x.com/hashtag/usanekoart" target="_blank" rel="noopener noreferrer">#usanekoart</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="pe-8 xl:pe-16 align-top">趣味</td>
                        <td className="align-top">配信・プログラミング</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                    <div className="font-bold text-3xl">Words / Meme</div>
                    <div className="text-sm text-rose-300">ジャーゴン</div>
                  </div>
                  <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
                    <ul className="list-disc ps-5">
                      <li>
                        わかりました
                        <ul>
                          <li>わかっていないときに使う。</li>
                        </ul>
                      </li>
                      <li>
                        こわいよー
                        <ul>
                          <li>
                            高い声で言うとより怖がっている感が出る。
                          </li>
                        </ul>
                      </li>
                      <li>
                        はたして本当にそうでしょうか
                        <ul>
                          <li>
                            ノリツッコミ等で多用される
                          </li>
                        </ul>
                      </li>
                      <li>
                        結婚しろ(Marry Me)
                        <ul>
                          <li>
                            リスナー同士やうさねことのカップリングを安易に成立させるときに使う。
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </section>
        <section id="videos" className="w-full">
          <div className="relative bg-stone-300 text-stone-900">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl">Recommended Videos</div>
                <div className="text-sm text-rose-600">神回</div>
              </div>
              <div className="mb-14 relative">
                <Swiper
                  modules={[A11y, Autoplay]}
                  autoplay={{delay: 0}}
                  speed={3000}
                  loop={true}
                  spaceBetween={50}
                  slidesPerView={2}
                  breakpoints={{
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 50
                    }
                  }}
                >
                  <SwiperSlide>
                    <a href="https://youtu.be/8rR9A1r_02U" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/atcoder-beginner.webp" alt="AtCoder はじめよう！登録から最初の提出・練習方法【中学生・高校生向け】" width={1280} height={720}/></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://youtu.be/BmgETVET1QA" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/r18-comic-intro.webp" alt="自分のエ○漫画のネームを作って絵師さんに依頼する" width={1280} height={720}/></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://youtu.be/WJ0fLH3_2uk" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/hack-the-box.webp" alt="ハッキング(CTF)やってみた！" width={1280} height={720}/></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://youtu.be/BejCkc1K4qs" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/profile.webp" alt="【自己紹介】東大卒技術系VTuber" width={1280} height={720}/></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://youtu.be/FE1EaxIJDR8" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/dlsite-recommend.webp" alt="DLsite おすすめ発表ドラゴン" width={1280} height={720}/></a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://youtu.be/g_QTfqi8_Ig" target="_blank" rel="noopener noreferrer"><Image src="/thumbnails/competition-koba789.webp" alt="競プロボンバー！各言語 1 回しばりで競プロやってみた！" width={1280} height={720}/></a>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="text-center">
                <a className="rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">More on YouTube ➤</a>
              </div>
            </div>
          </div>
        </section>
        <section id="link" className="w-full">
          <div className="relative bg-stone-400">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl text-stone-900">Link</div>
                <div className="text-sm text-rose-600">うさねこらーじを探せ！</div>
              </div>
              <div className="leading-loose text-center">
                <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-4">
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://x.com/usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://www.youtube.com/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://discord.gg/zRBavEQz6T" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://peing.net/ja/usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    Peing <span className="text-xs">(Anonymous Messages)</span>
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://skeb.jp/@usaneko_xlarge" target="_blank" rel="noopener noreferrer">
                    Skeb
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="https://usaneko-xlarge.fanbox.cc/" target="_blank" rel="noopener noreferrer">
                    pixivFANBOX
                  </a>
                  <a className="self-stretch flex items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href="mailto:naomi.lilienthal.jpn@gmail.com" target="_blank" rel="noopener noreferrer">
                    Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="history" className="bg-maze w-full">
          <div className="relative bg-gradient-to-b from-stone-600 from-60%">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl">History</div>
                <div className="text-sm text-rose-300">できごと</div>
              </div>
              <div className="mb-14">
                <div className="mb-14 text-center font-bold text-xl">VTuber として</div>
                <div className="mb-14 leading-loose xl:max-w-screen-sm xl:mx-auto">
                  <table>
                    <tbody>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">
                        <time dateTime="2024/07/02">2024年7月2日</time>
                      </td>
                      <td className="pb-4 align-top">3D化 & 登録者1万人記念ライブ</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">
                        <time dateTime="2023/12">2023年12月</time>
                      </td>
                      <td className="pb-4 align-top">情報処理安全確保支援士試験合格</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 align-top">
                        <time dateTime="2023/07/02">2023年7月2日</time>
                      </td>
                      <td className="align-top">VTuber として受肉</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mb-14 text-center font-bold text-xl">前世</div>
                <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
                  <table>
                    <tbody>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">東京大学工学部を卒業</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">主著である論文が国際学会を通過し、引用回数が数百回を超える</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">卒業論文が国際学会を通過</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">情報オリンピック予選 A ランク・本戦に出場</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">応用情報技術者試験に合格</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 pb-4 align-top">????年</td>
                      <td className="pb-4 align-top">AWS 認定試験で<b>Security Specialist</b>を含む9個に合格</td>
                    </tr>
                    <tr>
                      <td className="pe-8 xl:pe-16 align-top">????年</td>
                      <td className="align-top">3歳時のIQが驚異の<b>188</b></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="guideline" className="w-full">
          <div className="relative bg-stone-300 text-stone-900">
            <div className="px-10 xl:px-14 py-14 text-base">
              <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
                <div className="font-bold text-3xl">Guideline</div>
                <div className="text-sm text-rose-600">うさねこらーじ コンテンツガイドライン</div>
              </div>
              <div className="leading-loose xl:max-w-screen-sm xl:mx-auto">
                <section>
                  <p className="mb-6 font-bold">うさねこらーじについて</p>
                  <p className="mb-12">「うさねこらーじ」は個人が運営しています。<br/>「うさねこらーじ」または「うさねこらーじが生み出したオリジナル作品」に関する一切の権利はうさねこらーじ（以下「当方」という）に帰属します。</p>
                </section>
                <section>
                  <p className="mb-6 font-bold">二次創作について</p>
                  <section>
                    <p className="mb-6">本ガイドラインでは、以下を「原作」と定義します。</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>「うさねこらーじ」または「うさねこらーじが生み出したオリジナル作品」</li>
                      <li>うさねこらーじに権利が帰属する動画や写真、イラスト、音声等</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6">本ガイドラインでは、以下の作品、行為を「二次創作」と定義し、基本的には自由な活動を許可します。</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>個人活動の範囲で、営利を目的としない、原作を基としたあらゆる創作活動</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6">以下の作品、行為は「二次創作」とは定義されず、許可されません。</p>
                    <ul className="mb-6 list-disc ps-5">
                      <li>個人活動の範囲を超えていると判断できる、営利目的での活動や制作、頒布</li>
                      <li>原作を引用の範囲を超えて利用したもの</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6">下記の行為は、例え「二次創作」の範囲であっても許可されません。</p>
                    <ul className="mb-12 list-disc ps-5">
                      <li>二次創作グッズの頒布、販売</li>
                      <li>政治的、宗教的な内容、特定の思想等を含む表現</li>
                      <li>その他、当方が不適切と判断したもの</li>
                    </ul>
                  </section>
                  <section>
                    <p className="mb-6 font-bold">ガイドラインの改訂および一般事項</p>
                    <p className="mb-6">本ガイドラインは予告なく追加や修正を行う可能性があります。</p>
                    <p className="mb-6">コンテンツをお楽しみいただく、または二次創作を行う際は、最新の内容をご確認いただくよう、お願いいたします。</p>
                    <p className="mb-6">コンテンツの視聴や、二次創作はすべて自身の責任でお願いいたします。</p>
                    <p>うさねこらーじや、原作に関する二次創作、または本ガイドラインによって生じるあらゆる損害に関して、うさねこらーじは一切の責任を負いません。</p>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </section>
        <footer className="my-16 footer text-base text-center">Copyright &copy; 2023, {thisYear} Usaneko Large</footer>
      </main>
    </>
  );
}
//NOTE: All rights reservedは現行の著作権法においては不要である。なお、Copyrightは"○で囲われたC"の代替として機能するらしい。(後者は真偽不明)
//      一般的なコピーライト文に近くなるよう Copyright (C) {starting_year}, {last_changed_year} {copyright_holder} のような形にした。

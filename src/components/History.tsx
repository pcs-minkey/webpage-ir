"use client";

import Image from "next/image";
import { site } from "@/lib/site";

const yearTitle =
  "break-keep pb-2 text-xl font-semibold font-gong sm:text-2xl md:pb-3 md:text-3xl";
const item =
  "break-keep text-sm leading-relaxed opacity-60 sm:text-base md:text-lg";
const itemOld = `${item} font-['MBC1961GulimM']`;
const badge =
  "relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-lg sm:h-12 sm:w-12 md:h-[130px] md:w-[130px]";

export default function History() {
  return (
    <section id="history" className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div data-aos="fade-up" className="pb-16 text-center md:pb-24">
          <h2 className="pb-4 text-4xl font-semibold tracking-tight font-gong md:text-5x1">
            History
          </h2>
          <p className="text-base leading-relaxed italic opacity-80 md:text-x1">
            의료 현장의 고객이 겪는 고충을 공유하며
            <br />
            퍼블릭 헬스케어 패러다임을 선도하고 있습니다.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gray-300" />

          <div
            data-aos="fade-up"
            className="relative grid min-h-[320px] grid-cols-2 items-center md:min-h-[360px]"
          >
            <div className="min-w-0 pr-8 text-right sm:pr-8 md:pr-16 lg:pr-20">
              <h3 className={yearTitle}>2023 ~ 현재</h3>
              <div className="mt-3 space-y-2 md:mt-4">
                <p className={item}>공공 의료 기관 AI-CP 연구 개발</p>
                <p className={item}>의료 돌봄 구축 사업</p>
                <p className={item}>의료체계 디지털 전환 사업 추진</p>
                <p className={item}>사내벤처 창업 지원 사업 선정</p>
                <p className={item}>프리케어솔루션 설립</p>
              </div>
            </div>
            <div />
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className={badge}>
                <Image
                  src={site.images.pcscHisNew}
                  alt="2023 - 현재"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 80px, 180px"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="relative grid min-h-[360px] grid-cols-2 items-center md:min-h-[400px]"
          >
            <div />
            <div className="min-w-0 pl-8 text-left sm:pl-8 md:pl-16 lg:pl-20">
              <h3 className={yearTitle}>2023</h3>
              <div className="mt-3 space-y-2 md:mt-4">
                <p className={itemOld}>공공의료기관 운영본부장 역임</p>
                <p className={itemOld}>퍼블릭 헬스케어 패러다임 구축 선도</p>
                <p className={itemOld}>치매조기 검진 시스템 (KDSQ) 개발 참여</p>
                <p className={itemOld}>
                  덴티아이 납품을 통해 퍼블릭 헬스케어 시장 확대
                </p>
                <p className={itemOld}>
                  2022년도 공공의료정보망 통합 운영 유지관리
                </p>
                <p className={itemOld}>
                  KAI-I 이사로 역임하며 의료 현장 전문가로서 개발 참여
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className={badge}>
                <Image
                  src={site.images.pcscHis}
                  alt="2023"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 80px, 180px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

type IconProps = {
  className?: string;
};

export function RightIconWitArrow() {
  return (
    <span className="relative inline-block before:content-[''] before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:w-3.5 before:h-0.5 before:bg-white before:opacity-0 group-hover:before:opacity-100 transition-all duration-500 group-hover:translate-x-1.5 before:transition-all before:duration-500">
      <ChevronRight className="text-white" />
    </span>
  );
}

export function LeftIconWitArrow({ className }: IconProps) {
  return (
    <span
      className={cn(
        "relative inline-block before:content-[''] before:absolute before:top-1/2 before:right-0 before:translate-y-[-50%] before:w-3.5 before:h-0.5 before:bg-white before:opacity-0 group-hover:before:opacity-100 transition-all duration-500 group-hover:-translate-x-1.5 before:transition-all before:duration-500 text-white",
        className
      )}
    >
      <ChevronLeft className="text-inherit" />
    </span>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        stroke="currentColor"
        strokeWidth="0px"
      ></path>
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={22.7}
      style={{
        strokeWidth: 1,
      }}
      className={`newwave-icon ${className}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M.5 11h23M.3 11.5 11.2.7M0 10.4l11.2 11.2"
      />
    </svg>
  );
}
export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={22.7}
      style={{
        strokeWidth: 1,
      }}
      className={`newwave-icon ${className}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M0 11h23M11.2.7l11.2 11.2M11.2 21.9l11.2-11.2"
      />
    </svg>
  );
}

export function ArrowAccordingIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={20}
      height={20}
      viewBox="0 0 16.8 8.5"
      className={`newwave-icon ${className}`}
    >
      <path fill="currentColor" stroke="currentColor" d="M16.3 4.3.5 8.3v-8l15.8 4z" />
    </svg>
  );
}

export function Dots({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 508 508"
      className={`newwave-icon ${className}`}
    >
      <g transform="translate(1348 9025)">
        <circle cx={-1326.7} cy={-9003.7} r={2.3} />
        <circle cx={-1326.7} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1404 9025)">
        <circle cx={-1330.9} cy={-9003.7} r={2.3} />
        <circle cx={-1330.9} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1460 9025)">
        <circle cx={-1335.1} cy={-9003.7} r={2.3} />
        <circle cx={-1335.1} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1516 9025)">
        <circle cx={-1339.3} cy={-9003.7} r={2.3} />
        <circle cx={-1339.3} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1572 9025)">
        <ellipse cx={-1343.9} cy={-9003.7} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9003.7} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9025)">
        <ellipse cx={-1348.1} cy={-9003.7} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9003.7} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9025)">
        <circle cx={-1351.7} cy={-9003.7} r={2.3} />
        <circle cx={-1351.7} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1739 9025)">
        <circle cx={-1355.9} cy={-9003.7} r={2.3} />
        <circle cx={-1355.9} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1795 9025)">
        <circle cx={-1360.1} cy={-9003.7} r={2.3} />
        <circle cx={-1360.1} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1851 9025)">
        <circle cx={-1364.3} cy={-9003.7} r={2.3} />
        <circle cx={-1364.3} cy={-9003.7} r={1.9} />
      </g>
      <g transform="translate(1348 9528)">
        <circle cx={-1326.7} cy={-9041.3} r={2.3} />
        <circle cx={-1326.7} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1404 9528)">
        <circle cx={-1330.9} cy={-9041.3} r={2.3} />
        <circle cx={-1330.9} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1460 9528)">
        <circle cx={-1335.1} cy={-9041.3} r={2.3} />
        <circle cx={-1335.1} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1516 9528)">
        <circle cx={-1339.3} cy={-9041.3} r={2.3} />
        <circle cx={-1339.3} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1572 9528)">
        <ellipse cx={-1343.9} cy={-9041.3} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9041.3} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9528)">
        <ellipse cx={-1348.1} cy={-9041.3} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9041.3} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9528)">
        <circle cx={-1351.7} cy={-9041.3} r={2.3} />
        <circle cx={-1351.7} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1739 9528)">
        <circle cx={-1355.9} cy={-9041.3} r={2.3} />
        <circle cx={-1355.9} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1795 9528)">
        <circle cx={-1360.1} cy={-9041.3} r={2.3} />
        <circle cx={-1360.1} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1851 9528)">
        <circle cx={-1364.3} cy={-9041.3} r={2.3} />
        <circle cx={-1364.3} cy={-9041.3} r={1.9} />
      </g>
      <g transform="translate(1348 9472)">
        <circle cx={-1326.7} cy={-9037.1} r={2.3} />
        <circle cx={-1326.7} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1404 9472)">
        <circle cx={-1330.9} cy={-9037.1} r={2.3} />
        <circle cx={-1330.9} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1460 9472)">
        <circle cx={-1335.1} cy={-9037.1} r={2.3} />
        <circle cx={-1335.1} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1516 9472)">
        <circle cx={-1339.3} cy={-9037.1} r={2.3} />
        <circle cx={-1339.3} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1572 9472)">
        <ellipse cx={-1343.9} cy={-9037.1} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9037.1} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9472)">
        <ellipse cx={-1348.1} cy={-9037.1} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9037.1} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9472)">
        <circle cx={-1351.7} cy={-9037.1} r={2.3} />
        <circle cx={-1351.7} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1739 9472)">
        <circle cx={-1355.9} cy={-9037.1} r={2.3} />
        <circle cx={-1355.9} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1795 9472)">
        <circle cx={-1360.1} cy={-9037.1} r={2.3} />
        <circle cx={-1360.1} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1851 9472)">
        <circle cx={-1364.3} cy={-9037.1} r={2.3} />
        <circle cx={-1364.3} cy={-9037.1} r={1.9} />
      </g>
      <g transform="translate(1348 9416)">
        <circle cx={-1326.7} cy={-9032.9} r={2.3} />
        <circle cx={-1326.7} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1404 9416)">
        <circle cx={-1330.9} cy={-9032.9} r={2.3} />
        <circle cx={-1330.9} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1460 9416)">
        <circle cx={-1335.1} cy={-9032.9} r={2.3} />
        <circle cx={-1335.1} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1516 9416)">
        <circle cx={-1339.3} cy={-9032.9} r={2.3} />
        <circle cx={-1339.3} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1572 9416)">
        <ellipse cx={-1343.9} cy={-9032.9} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9032.9} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9416)">
        <ellipse cx={-1348.1} cy={-9032.9} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9032.9} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9416)">
        <circle cx={-1351.7} cy={-9032.9} r={2.3} />
        <circle cx={-1351.7} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1739 9416)">
        <circle cx={-1355.9} cy={-9032.9} r={2.3} />
        <circle cx={-1355.9} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1795 9416)">
        <circle cx={-1360.1} cy={-9032.9} r={2.3} />
        <circle cx={-1360.1} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1851 9416)">
        <circle cx={-1364.3} cy={-9032.9} r={2.3} />
        <circle cx={-1364.3} cy={-9032.9} r={1.9} />
      </g>
      <g transform="translate(1348 9360)">
        <circle cx={-1326.7} cy={-9028.7} r={2.3} />
        <circle cx={-1326.7} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1404 9360)">
        <circle cx={-1330.9} cy={-9028.7} r={2.3} />
        <circle cx={-1330.9} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1460 9360)">
        <circle cx={-1335.1} cy={-9028.7} r={2.3} />
        <circle cx={-1335.1} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1516 9360)">
        <circle cx={-1339.3} cy={-9028.7} r={2.3} />
        <circle cx={-1339.3} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1572 9360)">
        <ellipse cx={-1343.9} cy={-9028.7} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9028.7} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9360)">
        <ellipse cx={-1348.1} cy={-9028.7} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9028.7} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9360)">
        <circle cx={-1351.7} cy={-9028.7} r={2.3} />
        <circle cx={-1351.7} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1739 9360)">
        <circle cx={-1355.9} cy={-9028.7} r={2.3} />
        <circle cx={-1355.9} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1795 9360)">
        <circle cx={-1360.1} cy={-9028.7} r={2.3} />
        <circle cx={-1360.1} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1851 9360)">
        <circle cx={-1364.3} cy={-9028.7} r={2.3} />
        <circle cx={-1364.3} cy={-9028.7} r={1.9} />
      </g>
      <g transform="translate(1348 9305)">
        <ellipse cx={-1326.7} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1326.7} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1404 9305)">
        <ellipse cx={-1330.9} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1330.9} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1460 9305)">
        <ellipse cx={-1335.1} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1335.1} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1516 9305)">
        <ellipse cx={-1339.3} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1339.3} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1572 9305)">
        <circle cx={-1343.9} cy={-9025.1} r={1.9} />
        <circle cx={-1343.9} cy={-9025.1} r={1.4} />
      </g>
      <g transform="translate(1628 9305)">
        <circle cx={-1348.1} cy={-9025.1} r={1.9} />
        <circle cx={-1348.1} cy={-9025.1} r={1.4} />
      </g>
      <g transform="translate(1683 9305)">
        <ellipse cx={-1351.7} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1351.7} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1739 9305)">
        <ellipse cx={-1355.9} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1355.9} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1795 9305)">
        <ellipse cx={-1360.1} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1360.1} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1851 9305)">
        <ellipse cx={-1364.3} cy={-9025.1} rx={2.3} ry={1.9} />
        <ellipse cx={-1364.3} cy={-9025.1} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1348 9249)">
        <ellipse cx={-1326.7} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1326.7} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1404 9249)">
        <ellipse cx={-1330.9} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1330.9} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1460 9249)">
        <ellipse cx={-1335.1} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1335.1} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1516 9249)">
        <ellipse cx={-1339.3} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1339.3} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1572 9249)">
        <circle cx={-1343.9} cy={-9020.9} r={1.9} />
        <circle cx={-1343.9} cy={-9020.9} r={1.4} />
      </g>
      <g transform="translate(1628 9249)">
        <circle cx={-1348.1} cy={-9020.9} r={1.9} />
        <circle cx={-1348.1} cy={-9020.9} r={1.4} />
      </g>
      <g transform="translate(1683 9249)">
        <ellipse cx={-1351.7} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1351.7} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1739 9249)">
        <ellipse cx={-1355.9} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1355.9} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1795 9249)">
        <ellipse cx={-1360.1} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1360.1} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1851 9249)">
        <ellipse cx={-1364.3} cy={-9020.9} rx={2.3} ry={1.9} />
        <ellipse cx={-1364.3} cy={-9020.9} rx={1.9} ry={1.4} />
      </g>
      <g transform="translate(1348 9193)">
        <circle cx={-1326.7} cy={-9016.3} r={2.3} />
        <circle cx={-1326.7} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1404 9193)">
        <circle cx={-1330.9} cy={-9016.3} r={2.3} />
        <circle cx={-1330.9} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1460 9193)">
        <circle cx={-1335.1} cy={-9016.3} r={2.3} />
        <circle cx={-1335.1} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1516 9193)">
        <circle cx={-1339.3} cy={-9016.3} r={2.3} />
        <circle cx={-1339.3} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1572 9193)">
        <ellipse cx={-1343.9} cy={-9016.3} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9016.3} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9193)">
        <ellipse cx={-1348.1} cy={-9016.3} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9016.3} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9193)">
        <circle cx={-1351.7} cy={-9016.3} r={2.3} />
        <circle cx={-1351.7} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1739 9193)">
        <circle cx={-1355.9} cy={-9016.3} r={2.3} />
        <circle cx={-1355.9} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1795 9193)">
        <circle cx={-1360.1} cy={-9016.3} r={2.3} />
        <circle cx={-1360.1} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1851 9193)">
        <circle cx={-1364.3} cy={-9016.3} r={2.3} />
        <circle cx={-1364.3} cy={-9016.3} r={1.9} />
      </g>
      <g transform="translate(1348 9137)">
        <circle cx={-1326.7} cy={-9012.1} r={2.3} />
        <circle cx={-1326.7} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1404 9137)">
        <circle cx={-1330.9} cy={-9012.1} r={2.3} />
        <circle cx={-1330.9} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1460 9137)">
        <circle cx={-1335.1} cy={-9012.1} r={2.3} />
        <circle cx={-1335.1} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1516 9137)">
        <circle cx={-1339.3} cy={-9012.1} r={2.3} />
        <circle cx={-1339.3} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1572 9137)">
        <ellipse cx={-1343.9} cy={-9012.1} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9012.1} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9137)">
        <ellipse cx={-1348.1} cy={-9012.1} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9012.1} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9137)">
        <circle cx={-1351.7} cy={-9012.1} r={2.3} />
        <circle cx={-1351.7} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1739 9137)">
        <circle cx={-1355.9} cy={-9012.1} r={2.3} />
        <circle cx={-1355.9} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1795 9137)">
        <circle cx={-1360.1} cy={-9012.1} r={2.3} />
        <circle cx={-1360.1} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1851 9137)">
        <circle cx={-1364.3} cy={-9012.1} r={2.3} />
        <circle cx={-1364.3} cy={-9012.1} r={1.9} />
      </g>
      <g transform="translate(1348 9081)">
        <circle cx={-1326.7} cy={-9007.9} r={2.3} />
        <circle cx={-1326.7} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1404 9081)">
        <circle cx={-1330.9} cy={-9007.9} r={2.3} />
        <circle cx={-1330.9} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1460 9081)">
        <circle cx={-1335.1} cy={-9007.9} r={2.3} />
        <circle cx={-1335.1} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1516 9081)">
        <circle cx={-1339.3} cy={-9007.9} r={2.3} />
        <circle cx={-1339.3} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1572 9081)">
        <ellipse cx={-1343.9} cy={-9007.9} rx={1.9} ry={2.3} />
        <ellipse cx={-1343.9} cy={-9007.9} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1628 9081)">
        <ellipse cx={-1348.1} cy={-9007.9} rx={1.9} ry={2.3} />
        <ellipse cx={-1348.1} cy={-9007.9} rx={1.4} ry={1.9} />
      </g>
      <g transform="translate(1683 9081)">
        <circle cx={-1351.7} cy={-9007.9} r={2.3} />
        <circle cx={-1351.7} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1739 9081)">
        <circle cx={-1355.9} cy={-9007.9} r={2.3} />
        <circle cx={-1355.9} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1795 9081)">
        <circle cx={-1360.1} cy={-9007.9} r={2.3} />
        <circle cx={-1360.1} cy={-9007.9} r={1.9} />
      </g>
      <g transform="translate(1851 9081)">
        <circle cx={-1364.3} cy={-9007.9} r={2.3} />
        <circle cx={-1364.3} cy={-9007.9} r={1.9} />
      </g>
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={35}
      height={35}
      viewBox="0 0 21.5 18.2"
      className={`newwave-icon ${className}`}
    >
      <path fill="currentColor" d="m4.8 9.1-3.5 8 18.9-8-18.9-8 3.5 8z" />
    </svg>
  );
}
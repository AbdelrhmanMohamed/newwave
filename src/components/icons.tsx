import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

type IconProps = {
  className?: string;
  strokeWidth?: number;
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
export function LampIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={120}
      height={120}
      fill="currentColor"
      viewBox="0 0 106.9 118.1"
      className={`${className}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M53.3 114.1c-3.3 0-6.5-1.5-8.6-4.1-.3-.4-.3-1 .1-1.3.4-.3 1-.3 1.3.1 1.8 2.2 4.5 3.5 7.3 3.4 4.8 0 8.7-3.3 8.7-7.5 0-.5.4-.9.9-.9s.9.4.9.9c0 5.1-4.7 9.3-10.6 9.3.1.1 0 .1 0 .1zM40.8 109c-.4 0-.8-.3-.9-.7-.1-.5.2-1 .7-1.1l27-7.1c.5-.1 1 .2 1.1.7.1.5-.2 1-.7 1.1L41 109h-.2zm0-10.2c-.4 0-.8-.3-.9-.7-.1-.5.2-1 .7-1.1l27-7.1c.5-.1 1 .2 1.1.7.1.5-.2 1-.7 1.1l-27 7.1h-.2zm0-10.2c-.4 0-.8-.3-.9-.7-.1-.2 0-.4.1-.6-.3-.1-.5-.4-.5-.8-.5-7.9-3.5-10.3-7-13-4.2-3.2-8.9-6.9-9.8-20.6-.5-6.9 2.1-13.7 7.1-19.1 6-6.4 14.7-10.1 23.8-10.1 9 0 18 3.8 23.9 10.2 5 5.4 7.5 12.1 7 19-.9 13.3-5.5 16.9-9.6 20.1-2.4 1.9-4.7 3.7-6.1 7.5 0 .3-.2.7-.5.8-.1.1-.3.1-.4.1l-26.8 7c-.2.2-.3.2-.3.2zm12.7-63c-8.6 0-16.8 3.5-22.4 9.5-4.7 5-7 11.3-6.6 17.7.8 12.8 5 16.1 9.1 19.2 3.5 2.7 7.2 5.5 7.7 14.3v.2L67 79.8c1.6-4.2 4.2-6.2 6.6-8.2 3.9-3.1 8-6.4 8.9-18.8.5-6.4-1.9-12.6-6.5-17.6-5.6-6-14-9.6-22.5-9.6zM86 87.7c-.2 0-.5-.1-.7-.3L79 81c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l6.4 6.4c.4.4.4 1 0 1.3-.2.2-.4.3-.7.3zm-66.4 0c-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.3l6.4-6.4c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-6.4 6.4c-.1.2-.4.3-.6.3zm29.2-20.1c-.3 0-.5-.1-.7-.3l-8.8-9.9c-.3-.4-.3-1 .1-1.3.4-.3 1-.3 1.3.1l8.1 9.1L67.5 44c.3-.4.9-.4 1.3-.1.4.3.4.9.1 1.3l-19.4 22c-.2.2-.5.3-.7.4zm53.5-13.8h-9.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h9.1c.5 0 .9.4.9.9s-.4.9-.9.9zM13.7 52H4.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h9.1c.5 0 .9.4.9.9s-.4.9-.9.9zm67.2-27.1c-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.3l6.4-6.4c.4-.4 1-.4 1.3 0s.4 1 0 1.3l-6.4 6.4c-.1.2-.3.3-.6.3zm-53.6 0c-.2 0-.5-.1-.7-.3l-6.4-6.4c-.4-.4-.4-1 0-1.3s1-.4 1.3 0l6.4 6.4c.4.4.4 1 0 1.3-.1.2-.3.3-.6.3zM54.4 15c-.5 0-.9-.4-.9-.9V5c0-.5.4-.9.9-.9s.9.4.9.9v9.1c0 .5-.4.9-.9.9z"
      />
    </svg>
  );
}

export function FindIcon({ className, strokeWidth }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={120}
      height={120}
      viewBox="0 0 100.7 101.7"
      className={`${className}`}
    >
      <g fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth}>
        <path d="M44.3 76.7c-.5 0-.9-.4-.9-.9l-.1-47.1c0-5.8-5.8-10.5-12.9-10.5-6.4 0-11.2 4-13 10.8L6.1 72.1c-.1.5-.6.8-1.1.7-.5-.1-.8-.6-.7-1.1l11.2-43.3c1.5-5.9 6.2-12.2 14.8-12.2 8.1 0 14.8 5.6 14.8 12.4l.1 47.1c0 .5-.4 1-.9 1z" />
        <path d="M40.8 20.9c-.5 0-.9-.4-.9-.9v-9c0-3.2-3.2-5.7-7.1-5.7-4.9 0-6.5 4.3-7 6.2L24 18.3c-.1.5-.6.8-1.1.7-.5-.1-.8-.6-.7-1.1L24 11c1.2-4.7 4.5-7.6 8.8-7.6 5 0 9 3.4 9 7.6v9c0 .5-.4.9-1 .9zM56.3 76.7c-.5 0-.9-.4-.9-.9l.1-47.1c0-6.8 6.6-12.4 14.8-12.4 8.6 0 13.2 6.3 14.8 12.2l11.2 43.3c.1.5-.2 1-.7 1.1-.5.1-1-.2-1.1-.7L83.2 28.8c-1.8-6.7-6.6-10.8-13-10.8-7.1 0-12.9 4.7-12.9 10.5l-.1 47.1c0 .6-.4 1.1-.9 1.1z" />
        <path d="M59.7 20.9c-.5 0-.9-.4-.9-.9v-9c0-4.2 4-7.6 9-7.6 4.3 0 7.6 2.8 8.8 7.6l1.8 6.9c.1.5-.2 1-.7 1.1-.5.1-1-.2-1.1-.7l-1.8-6.9c-.5-1.9-2.1-6.2-7-6.2-3.9 0-7.1 2.6-7.1 5.7v9c0 .6-.5 1-1 1zM24.1 98.4c-10.6 0-19.7-8.1-20.7-18.9-1-11.4 7.4-21.6 18.8-22.6s21.6 7.4 22.6 18.8c.5 5.5-1.2 10.9-4.7 15.2-3.6 4.3-8.6 6.9-14.1 7.4-.6 0-1.2.1-1.9.1zm-1.7-39.7C12 59.6 4.3 68.9 5.3 79.3c.9 10.4 10.2 18.1 20.6 17.1 5-.5 9.6-2.8 12.8-6.7 3.2-3.9 4.8-8.8 4.3-13.8-.9-10.5-10.2-18.1-20.6-17.2z" />
        <path d="M36.5 77.4c-.5 0-.9-.4-.9-.8-.6-6.3-6.2-11-12.5-10.4-.5 0-1-.3-1-.8s.3-1 .8-1c7.3-.7 13.9 4.8 14.5 12.1.1.4-.3.8-.9.9.1 0 .1 0 0 0zM76.5 98.4c-4.9 0-9.5-1.7-13.3-4.8C59 90 56.3 85 55.8 79.4c-1-11.4 7.4-21.6 18.8-22.6s21.6 7.4 22.6 18.8c.5 5.5-1.2 10.9-4.7 15.2-3.6 4.3-8.6 6.9-14.1 7.4-.6.1-1.3.2-1.9.2zm-1.7-39.7c-10.4.9-18.1 10.2-17.1 20.6.5 5 2.8 9.6 6.7 12.8 3.9 3.2 8.8 4.8 13.8 4.3s9.6-2.8 12.8-6.7c3.2-3.9 4.8-8.8 4.3-13.8-.8-10.5-10.1-18.1-20.5-17.2z" />
        <path d="M88.9 77.4c-.5 0-.9-.4-.9-.8-.6-6.3-6.2-11-12.5-10.4-.5 0-1-.3-1-.8s.3-1 .8-1c7.3-.7 13.9 4.8 14.5 12.1.1.4-.3.8-.9.9.1 0 .1 0 0 0zM50.3 78c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8.1 3.8-3 6.8-6.8 6.8zm0-11.7c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9c.1-2.7-2.1-4.9-4.9-4.9zM56.2 39.7c-.5 0-.9-.4-.9-.9 0-2.7-2.2-4.9-4.9-4.9s-4.9 2.2-4.9 4.9c0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8-.1.5-.6.9-1.1.9z" />
      </g>
    </svg>
  );
}



export function IntegrateIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={120}
      height={120}
      viewBox="0 0 111.3 108.4"
      className={`${className}`}
    >
      <g fill="currentColor" stroke="currentColor">
        <path d="M42.5 104.2c-.2 0-.3 0-.5-.1l-14-8.5-13.5 8.4c-.3.2-.7.2-1 0s-.4-.6-.4-1l3.7-16L4.6 76.9c-.3-.2-.4-.6-.3-1 .1-.4.4-.6.8-.6l16.4-1.4 5.9-14.8c.1-.3.5-.6.8-.6.4 0 .7.2.9.6l6.4 15.2 15.9 1c.4 0 .7.3.8.6.1.4 0 .7-.3 1L39.5 87.6l3.9 15.4c.1.4 0 .7-.3 1-.2.1-.4.2-.6.2zM28 93.5c.2 0 .3 0 .5.1l12.7 7.6-3.5-13.8c-.1-.3 0-.7.3-.9l11-9.6-14.1-.9c-.3 0-.7-.2-.8-.6l-5.7-13.6L23.1 75c-.1.3-.4.5-.8.6L7.6 76.9 18.5 86c.3.2.4.6.3.9l-3.4 14.4 12-7.6c.2-.1.4-.2.6-.2zm-5.8-18.8zM28.3 45.7C16.9 45.7 7.6 36.4 7.6 25S16.8 4.2 28.3 4.2c5.5 0 10.8 2.2 14.7 6.1 3.9 3.9 6.1 9.1 6.1 14.7-.1 11.4-9.4 20.7-20.8 20.7zm0-39.7C17.9 6 9.4 14.5 9.4 24.9s8.5 18.9 18.9 18.9c10.4 0 18.9-8.5 18.9-18.9 0-5-2-9.8-5.5-13.4C38.1 8 33.3 6 28.3 6zM106.1 45.7H64.3c-.3 0-.6-.2-.8-.5-.2-.3-.2-.6 0-.9L84.4 8.1c.2-.3.5-.5.8-.5.3 0 .6.2.8.5l20.9 36.2c.2.3.2.6 0 .9-.2.3-.5.5-.8.5zm-40.2-1.9h38.6L85.2 10.4 65.9 43.8zM104.5 102.7H66c-.5 0-.9-.4-.9-.9V63.3c0-.5.4-.9.9-.9h38.5c.5 0 .9.4.9.9v38.5c0 .5-.4.9-.9.9zm-37.6-1.9h36.6V64.2H66.9v36.6z" />
      </g>
    </svg>
  );
}



export function TargetIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={124.7}
      height={124.2}
      className={`${className}`}
    >
      <g fill="currentColor" stroke="currentColor">
        <path d="M71.5 119.6c-9.9 0-19.9-3-28.5-9.3-21.7-15.7-26.4-46.1-10.7-67.8.3-.4.9-.5 1.3-.2s.5.9.2 1.3C26.5 53.7 23.5 66 25.4 78.4c1.9 12.3 8.6 23.1 18.6 30.5 20.8 15.2 50.1 10.6 65.2-10.3 15.2-20.8 10.5-50.1-10.3-65.2-16.4-12-38.5-12-55 0-.4.3-1 .2-1.3-.2-.3-.4-.2-1 .2-1.3 17.1-12.4 40-12.4 57.1 0 21.6 15.8 26.4 46.2 10.7 67.8-9.3 13-24.1 19.9-39.1 19.9z" />
        <path d="M71.5 106.6c-6.5 0-13.2-1.8-19.1-5.6C36 90.4 31.1 68.5 41.7 52c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3-10 15.6-5.4 36.4 10.2 46.4s36.4 5.4 46.4-10.2 5.4-36.4-10.2-46.4c-11-7-25.2-7-36.2 0-.4.3-1 .1-1.3-.3-.3-.4-.2-1 .3-1.3 11.6-7.4 26.6-7.4 38.2 0 16.5 10.5 21.3 32.5 10.7 49-6.8 10.6-18.2 16.4-29.9 16.4z" />
        <path d="M71.5 93.5c-3.1 0-6.3-.7-9.4-2.1C50.9 86.2 46 72.9 51.2 61.7c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2-4.8 10.3-.3 22.5 10 27.2 10.3 4.7 22.5.3 27.2-10 2.3-5 2.5-10.5.6-15.7-1.9-5.1-5.7-9.2-10.6-11.5-5.5-2.5-11.8-2.5-17.2 0-.5.2-1 0-1.2-.5-.2-.5 0-1 .5-1.2 6-2.8 12.8-2.8 18.8 0 5.4 2.5 9.5 7 11.6 12.6 2.1 5.6 1.8 11.7-.7 17.1-3.8 8.3-11.9 13.1-20.4 13.1z" />
        <path d="M71.5 80.4c-1.5 0-3-.4-4.3-1.1-2.2-1.2-3.8-3.1-4.5-5.5-.2-.5.1-1 .6-1.2.5-.2 1 .1 1.2.6.6 1.9 1.9 3.5 3.6 4.4 1.8.9 3.8 1.1 5.7.5 1.9-.6 3.5-1.9 4.4-3.6s1.1-3.8.5-5.7c-.7-2.4-2.6-4.2-4.9-4.9-.5-.2-.8-.7-.6-1.2.2-.5.7-.8 1.2-.6 2.9.9 5.2 3.2 6.1 6.1.7 2.4.5 4.9-.7 7.1-1.2 2.2-3.1 3.8-5.5 4.5-.9.5-1.9.6-2.8.6z" />
        <path d="M70.9 71.6c-.2 0-.5-.1-.7-.3L10.8 11.9c-.4-.4-.4-.9 0-1.3s.9-.4 1.3 0L71.6 70c.4.4.4.9 0 1.3-.2.2-.4.3-.7.3z" />
        <path d="M19.6 38.5c-.2 0-.5-.1-.7-.3l-14-14c-.2-.2-.3-.6-.2-.9 0-.3.3-.6.6-.7l12-3.8c.5-.2 1 .1 1.2.6.2.5-.1 1-.6 1.2L7.3 24l12.6 12.6L31.4 33c.5-.2 1 .1 1.2.6.2.5-.1 1-.6 1.2l-12 3.8c-.2-.1-.3-.1-.4-.1zM33.8 32.5h-.3c-.5-.2-.8-.7-.6-1.2l3.6-11.5L24 7.3l-3.3 10.6c-.2.5-.7.8-1.2.6-.5-.2-.8-.7-.6-1.2l3.8-12c.1-.3.3-.6.6-.7.3-.1.6 0 .9.2l14 14c.2.2.3.6.2.9l-3.8 12c0 .6-.4.8-.8.8z" />
      </g>
    </svg>
  );
}
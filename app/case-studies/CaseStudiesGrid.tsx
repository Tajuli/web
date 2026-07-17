"use client";

import { useRef, useState } from "react";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";

const ITEMS_PER_PAGE = 6;

export default function CaseStudiesGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);

  const studies = caseStudies;

  const totalPages = Math.ceil(
    studies.length / ITEMS_PER_PAGE
  );

  const paginatedStudies = studies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changePage = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div ref={sectionRef}>
      <div className={styles.grid}>
        {paginatedStudies.map((study) => (
          <CaseStudyCard
            key={study.slug}
            study={study}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            type="button"
            className={`${styles.pageButton} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
            ← Previous
          </button>

          <div className={styles.pageNumbers}>
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => changePage(page)}
                className={`${styles.pageNumber} ${
                  currentPage === page
                    ? styles.activePage
                    : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.pageButton} ${
              currentPage === totalPages
                ? styles.disabled
                : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

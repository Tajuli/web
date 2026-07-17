"use client";

import { useState } from "react";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

const ITEMS_PER_PAGE = 6;

export default function CaseStudiesGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  // চাইলে featured card নিচে না দেখাতে এটা ব্যবহার করো
  // const studies = caseStudies.filter((study) => !study.featured);

  const studies = caseStudies;

  const totalPages = Math.ceil(
    studies.length / ITEMS_PER_PAGE
  );

  const paginatedStudies = studies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
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
            className={`${styles.pageButton} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((page) => page - 1)
            }
          >
            ← Previous
          </button>

          <div className={styles.pageNumbers}>
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
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
            className={`${styles.pageButton} ${
              currentPage === totalPages
                ? styles.disabled
                : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((page) => page + 1)
            }
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
}

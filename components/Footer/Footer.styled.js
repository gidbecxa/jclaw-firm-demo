import styled from "styled-components";
import { theme } from "../Theme";
import Link from "next/link";

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0 2rem;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.teritory};
  margin-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;
`;

export const FooterLink = styled(Link)`
  color: #555;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primaryBackground};
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export const DeveloperCredit = styled.p`
  color: #666;
  font-size: 0.9rem;

  a {
    color: ${theme.colors.primaryBackground};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.teritory};
    }
  }
`;
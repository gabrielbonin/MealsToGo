import styled from "styled-components/native";
import { Theme } from "../../../infrastructure/theme";

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: Theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: Theme) => `
  font-size: ${theme.fontSizes.caption};
  font-family: ${theme.fontWeights.bold};
`;

const label = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
`;

interface TextProps {
  variant: keyof typeof variants;
}

const variants = {
  body: body,
  label: label,
  error: error,
  hint: hint,
  caption: caption,
};

export const Text = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyles(theme as Theme)}
  ${({ variant, theme }) => variants[variant](theme as Theme)}
`;

Text.defaultProps = { variant: "body" };
